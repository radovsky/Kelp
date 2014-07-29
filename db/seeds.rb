# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Business.create(name: 'Beautiful Old Victorian', location: 'Haight/Ashbury, San Francisco', description: 'Bourgeonderful!', category:'Ok', price_range: '225', num_stars: '4.5', avatar: File.open('public/images/Haight_Ashbury11.JPG'))

Business.create(name: 'Rustic Shed', location: 'Golden Gate Bridge, San Francisco', description: 'Urban glamping at its finest!', category:'Bad', price_range: '95', num_stars: '3.2', avatar: File.open('public/images/shack.jpg'))

Business.create(name: 'Baller-ass Penthouse', location: 'SOMA, San Francisco', description: 'Sleep someplace better than all your friends!', category:'Ok', price_range: '965', num_stars: '4.9', avatar: File.open('public/images/Museum-Tower-Penthouse_1.jpg'))

Business.create(name: 'Cozy Room for One', location: 'Alcatraz Island, San Francisco', description: "Memories you'll never escape!", category:'Terrible', price_range: '0', num_stars: '1.6', avatar: File.open('public/images/Alcatraz.jpg'))

Business.create(name: 'Shared Room with Pets', location: 'Pier 39, San Francisco', description: "Hope you're not allergic!", category:'Ok', price_range: '99', num_stars: '4.4', avatar: File.open('public/images/sea_lions.jpg'))

Business.create(name: 'There may or may not be Actual Treasure', location: 'Treasure Island, San Francisco', description: "100% guarantee there either is or isn't!", category:'Bad', price_range: '1275', num_stars: '2.2', avatar: File.open('public/images/tropical-island.jpg'))