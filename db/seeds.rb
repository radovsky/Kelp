# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(
	username: 'guest', 
	password: 'password', 
	avatar: File.open(
		'public/images/default-user.jpg'
		)
	)

hipster = User.create!(
	username: 'Jed', 
	password: 'password', 
	avatar: File.open(
		'public/images/hipster_shirt.jpg'
		)
	)

hobo = User.create!(
	username: 'Felix', 
	password: 'password', 
	avatar: File.open(
		'public/images/angry_man1.jpg'
		)
	)

salad_girl = User.create!(
	username: 'Fiona', 
	password: 'password', 
	avatar: File.open(
		'public/images/laughing_salad.jpg'
		)
	)

cashcat = User.create!(
	username: 'Mortimer', 
	password: 'password', 
	avatar: File.open(
		'public/images/cashcat.jpg'
		)
	)

gimp = User.create!(
	username: 'GIMP', 
	password: 'password', 
	avatar: File.open(
		'public/images/gimp.jpg'
		)
	)

steve = User.create!(
	username: 'Steve', 
	password: 'password', 
	avatar: File.open(
		'public/images/steve-thomson.jpg'
		)
	)

frida = User.create!(
	username: 'Frida', 
	password: 'password', 
	avatar: File.open(
		'public/images/frida.jpg'
		)
	)

gabe = User.create!(
	username: 'Gabe', 
	password: 'password', 
	avatar: File.open(
		'public/images/gabe.jpeg'
		)
	)

mark = User.create!(
	username: 'Mark', 
	password: 'password', 
	avatar: File.open(
		'public/images/zuckerberg.jpg'
		)
	)

donna = User.create!(
	username: 'Donna', 
	password: 'password', 
	avatar: File.open(
		'public/images/donnamendes.jpg'
		)
	)

victorian = Business.create!(
	name: 'Beautiful Old Victorian', 
	location: 'Haight/Ashbury, San Francisco', 
	description: 'Bourgeonderful!', 
	category:'Private Room', 
	price_range: '225', 
	num_stars: '4.5', 
	avatar: File.open(
		'public/images/Haight_Ashbury11.JPG'
		), 
	user_id: hipster.id
	)

Review.create!(
	business_id: victorian.id,
	user_id: cashcat.id,
	description: 'Quaint.'
	)

Review.create!(
	business_id: victorian.id,
	user_id: salad_girl.id,
	description: 'It was so darling!'
	)

Review.create!(
	business_id: victorian.id,
	user_id: gimp.id,
	description: 'mmfmfmfmfmmmmmm'
	)



shed = Business.create!(
	name: 'Rustic Shed', 
	location: 'Golden Gate Bridge, San Francisco', 
	description: 'Urban glamping at its finest!', 
	category:'Shack/Hovel', 
	price_range: '95', 
	num_stars: '3.2', 
	avatar: File.open(
		'public/images/shack.jpg'
		), 
	user_id: salad_girl.id
	)

Review.create!(
	business_id: shed.id,
	user_id: hobo.id,
	description: "I've slept worse places, BELIEVE ME."
	)

Review.create!(
	business_id: shed.id,
	user_id: hipster.id,
	description: "That place used to be cool but it's so crowded now."
	)


baller = Business.create!(
	name: 'Baller-ass Penthouse', 
	location: 'SOMA, San Francisco', 
	description: 'Sleep someplace better than all your friends!', 
	category:'Mansion/Penthouse', 
	price_range: '965', 
	num_stars: '4.9', 
	avatar: File.open(
		'public/images/Museum-Tower-Penthouse_1.jpg'
		), 
	user_id: cashcat.id
	)

Review.create!(
	business_id: baller.id,
	user_id: frida.id,
	description: 'some seriously coked-up weekends there'
	)

Review.create!(
	business_id: baller.id,
	user_id: mark.id,
	description: 'shit is crazy'
	)


alcatraz = Business.create!(
	name: 'Cozy Room for One', 
	location: 'Alcatraz Island, San Francisco', 
	description: "Memories you'll never escape!", 
	category:'Private Room', 
	price_range: '0', 
	num_stars: '1.6', 
	avatar: File.open(
		'public/images/Alcatraz.jpg'
		), 
	user_id: steve.id
	)

Review.create!(
	business_id: alcatraz.id,
	user_id: mark.id,
	description: 'never again'
	)


sealions = Business.create!(
	name: 'Shared Room with Pets', 
	location: 'Pier 39, San Francisco', 
	description: "Hope you're not allergic!", 
	category:'Shack/Hovel', 
	price_range: '99', 
	num_stars: '4.4', 
	avatar: File.open(
		'public/images/sea_lions.jpg'
		), 
	user_id: hobo.id
	)

Review.create!(
	business_id: sealions.id,
	user_id: cashcat.id,
	description: "Those sea lions can't even do tricks. What a waste of time."
	)

Review.create!(
	business_id: sealions.id,
	user_id: hobo.id,
	description: 'AMAZING'
	)

treasure = Business.create!(
	name: 'There may or may not be Actual Treasure', 
	location: 'Treasure Island, San Francisco', 
	description: "100% guarantee there either is or isn't!", 
	category:'Mansion/Penthouse', 
	price_range: '999', 
	num_stars: '2.2', 
	avatar: File.open(
		'public/images/tropical-island.jpg'
		), 
	user_id: donna.id
	)

Review.create!(
	business_id: treasure.id,
	user_id: mark.id,
	description: "DON'T GO HERE THERE IS NO TREASURE"
	)

Review.create!(
	business_id: treasure.id,
	user_id: salad_girl.id,
	description: "It's totally a metaphor, the treasure is within you!"
	)

coit = Business.create!(
	name: 'Extremely Cramped Penthouse', 
	location: 'Coit Tower, San Francisco', 
	description: "Come for the view, stay because there's a two-hour wait to take the elevator back down!", 
	category: 'Mansion/Penthouse', 
	price_range: '575', 
	num_stars: '3', 
	avatar: File.open(
		'public/images/coit_tower.jpg' 
		), 
	user_id: cashcat.id
	)

Review.create!(
	business_id: coit.id,
	user_id: steve.id,
	description: "It's too phallic, it made me uncomfortable."
	)

Review.create!(
	business_id: coit.id,
	user_id: cashcat.id,
	description: 'Feeling inadequate, Steve?'
	)

lemurs = Business.create!(
	name: 'Lemur Paradise', 
	location: 'San Francisco Zoo', 
	description: "You'll go bug-eyed when you see it.", 
	category: 'Shack/Hovel', 
	price_range: '350', 
	num_stars: '5', 
	avatar: File.open(
		'public/images/Brown_Lemur_in_Andasibe.jpg'
		), 
	user_id: frida.id
	)

Review.create!(
	business_id: lemurs.id,
	user_id: cashcat.id,
	description: 'SO CUTE!!!!'
	)

Review.create!(
	business_id: lemurs.id,
	user_id: hobo.id,
	description: 'Those lemurs were delicious!'
	)


burrito = Business.create!(
	name: 'Burrito Shop Storeroom', 
	location: 'Mission District, San Francsico', 
	description: 'Muy chico y un poco sucio, pero viene con comida gratis.', 
	category: 'Private Room', 
	price_range: '125', 
	num_stars: '3', 
	avatar: File.open(
		'public/images/farolito.jpg'
		), 
	user_id: hobo.id
	)

Review.create!(
	business_id: burrito.id,
	user_id: hobo.id,
	description: 'those burritos gave me HEARTBURN'
	)


dungeon = Business.create!(
  name: 'Festive Dungeon',
  location: 'The Castro, San Francisco',
  description: "Don't forget the safeword!",
  category: 'Mansion/Penthouse',
  price_range: '750',
  num_stars: '5',
  avatar: File.open(
    'public/images/dungeon.jpg'
    ),
  user_id: gimp.id
  )

Review.create!(
  business_id: dungeon.id,
  user_id: cashcat.id,
  description: 'never again'
  )

Review.create!(
  business_id: dungeon.id,
  user_id: steve.id,
  description: 'thank you sir may I have another? ;)'
  )


aa = Business.create!(
	name: 'Air Mattress on Coding Bootcamp Floor', 
	location: 'Mid-Market, San Francisco', 
	description: "You'll live like a migrant laborer for 12 weeks but you'll learn a fuckton!", 
	category: 'Shack/Hovel', 
	price_range: '214', 
	num_stars: '5', 
	avatar: File.open(
		'public/images/aa.jpg'
		), 
	user_id: gabe.id
	)

Review.create!(
	business_id: aa.id,
	user_id: hipster.id,
	description: "I hear they don't even teach Spectangular.js, so lame. It's this really obscure framework, you've probably never heard of it."
	)


facebook = Business.create!(
	name: 'Need Money Bad', 
	location: 'Dolores Heights, San Francisco', 
	description: "Help me finance my expensive tastes!", 
	category: 'Private Room', 
	price_range: '830', 
	num_stars: '5', 
	avatar: File.open(
		'public/images/zuck_house.jpg'
		), 
	user_id: mark.id
	)

Review.create!(
	business_id: facebook.id,
	user_id: cashcat.id,
	description: "This place has really gone downhill."
	)