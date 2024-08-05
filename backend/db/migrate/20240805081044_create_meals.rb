class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.references :user, foreign_key: true
      t.string :meal_type
      t.date :meal_date
      t.float :total_calories
      t.float :total_protein
      t.float :total_fat
      t.float :total_carbohydrates

      t.timestamps
    end
  end
end
