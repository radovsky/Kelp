class Business < ActiveRecord::Base
  validates :name, :location, :description, :price_range, presence: true
  
  has_many :reviews
end
