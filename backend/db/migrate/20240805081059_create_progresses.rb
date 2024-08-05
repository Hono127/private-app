class CreateProgresses < ActiveRecord::Migration[7.0]
  def change
    create_table :progresses do |t|
      t.references :user, foreign_key: true
      t.date :measurement_date
      t.float :weight
      t.float :body_fat_percentage
      t.text :comments

      t.timestamps
    end
  end
end
