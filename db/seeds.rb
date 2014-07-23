# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Business.create(name: 'Rotting Whale Carcass', location: 'Pacific Ocean', description: 'delicious!', price_range: 1)

Business.create(name: 'Coral Reef', location: 'Arctic Ocean', description: 'everything is dead', price_range: 4)

Business.create(name: 'Sunken Submarine', location: 'Marianas Trench', description: 'high-pressure environment', price_range: 2)