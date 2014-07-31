# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  num_stars   :integer          not null
#  description :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Review < ActiveRecord::Base
  validates :user_id, :business_id, :description, presence: true
  
  belongs_to :user
  belongs_to :business
end