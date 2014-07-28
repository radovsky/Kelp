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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
