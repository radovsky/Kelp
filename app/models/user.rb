# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  location        :string(255)
#  bio             :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/public/logo.jpg"
   validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
   
   def avatar_url
     avatar.url(:medium)
   end
   
   def avatar_thumb_url
     avatar.url(:thumb)
   end
  
  attr_reader :password
  
  has_many :reviews
  has_many :businesses
  
  after_initialize :ensure_session_token
  
  def self.find_by_credentials username, password
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end
  
  def password= password
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def valid_password? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
  
  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
