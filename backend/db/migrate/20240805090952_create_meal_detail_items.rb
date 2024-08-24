class CreateMealDetailItems < ActiveRecord::Migration[7.0]
  def change
    create_table :meal_detail_items do |t|
      t.references :meal_item, null: false, foreign_key: true
      t.references :food_item, null: false, foreign_key: true
      t.float :quantity
      t.float :calories
      t.float :protein
      t.float :fat
      t.float :carbohydrates

      t.timestamps
    end
  end
end
