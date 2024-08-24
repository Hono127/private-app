class CreateMealDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :meal_details do |t|
      t.references :meal, foreign_key: true
      t.references :food, foreign_key: true
      t.float :quantity
      t.float :calories
      t.float :protein
      t.float :fat
      t.float :carbohydrates

      t.timestamps
    end
  end
end
