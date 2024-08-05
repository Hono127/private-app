class CreateFoodItems < ActiveRecord::Migration[7.0]
  def change
    create_table :food_items do |t|
      t.string :name
      t.float :calories
      t.float :protein
      t.float :fat
      t.float :carbohydrates

      t.timestamps
    end
  end
end
