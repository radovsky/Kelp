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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
