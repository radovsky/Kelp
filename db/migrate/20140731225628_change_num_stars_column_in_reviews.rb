class ChangeNumStarsColumnInReviews < ActiveRecord::Migration
  def change
    change_column :reviews, :num_stars, :integer, null: true
  end
end
