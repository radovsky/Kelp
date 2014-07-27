# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  location    :string(255)      not null
#  description :string(255)      not null
#  price_range :integer          not null
#  num_stars   :integer
#  category    :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Business < ActiveRecord::Base
  validates :name, :location, :description, :price_range, presence: true

  has_attached_file :avatar, styles: { medium: "300X300#", thumb: "100x100#" }# , default_url: "/public/logo.jpg"
  
  validates_attachment_content_type(:avatar, content_type: /\Aimage\/.*\Z/)
  
  has_many :reviews

  def avatar_url
    avatar.url(:medium)
  end
end
