class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.integer :num_stars, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
