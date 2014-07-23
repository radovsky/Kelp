class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :description, null: false
      t.integer :price_range, null: false
      t.integer :num_stars
      t.string :category

      t.timestamps
    end
  end
end
