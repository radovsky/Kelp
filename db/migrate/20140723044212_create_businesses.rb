class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :location
      t.integer :num_stars
      t.integer :price_range
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
