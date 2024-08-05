class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :gender
      t.float :height
      t.float :weight
      t.integer :age
      t.string :activity_level
      t.string :goal

      t.timestamps
    end
  end
end
