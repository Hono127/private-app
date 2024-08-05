class CreateProgressItems < ActiveRecord::Migration[7.0]
  def change
    create_table :progress_items do |t|
      t.references :user, null: false, foreign_key: true
      t.date :measurement_date
      t.float :weight
      t.float :body_fat_percentage
      t.text :comments

      t.timestamps
    end
  end
end
