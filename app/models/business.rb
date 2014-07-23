class Business < ActiveRecord::Base
  validates :name, :location, presence: true
  
  has_many :reviews
end
