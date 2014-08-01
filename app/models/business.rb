# == Schema Information
#
# Table name: businesses
#
#  id                  :integer          not null, primary key
#  name                :string(255)      not null
#  location            :string(255)      not null
#  description         :string(255)      not null
#  price_range         :integer          not null
#  num_stars           :integer
#  category            :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  latitude            :decimal(, )
#  longitude           :decimal(, )
#

class Business < ActiveRecord::Base
  extend ::Geocoder::Model::ActiveRecord
  
  validates :name, :location, :description, :price_range, presence: true

  has_attached_file :avatar, styles: { medium: "900X600#", thumb: "100x100#" }, default_url: "/images/Modern-A-House-17.jpg"
  
  validates_attachment_content_type(:avatar, content_type: /\Aimage\/.*\Z/)
  
  has_many :reviews
  belongs_to :user

  def avatar_url
    avatar.url(:medium)
  end
  
  geocoded_by :location
  after_validation :geocode
end
