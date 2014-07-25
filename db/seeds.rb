# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Business.create(name: 'Rotting Whale Carcass', location: 'Pacific Ocean', description: 'delicious!', category:'Steakhouse' price_range: 1, num_stars: 5)

Business.create(name: 'Coral Reef', location: 'Arctic Ocean', description: 'everything is dead', category: 'Nightlife' price_range: 4, num_stars: 3)

Business.create(name: 'Sunken Submarine', location: 'Marianas Trench', description: 'high-pressure environment', category: 'Breakfast & Brunch' price_range: 2, num_stars: 2)

Business.create(name: 'Garbage Island', location: 'Sargasso Sea', description: 'pretty trashy', category: 'American' price_range: 1, num_stars: 4)