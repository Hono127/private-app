# app/models/food.rb
class Food < ApplicationRecord
  has_many :meal_details

  validates :name, presence: true
  validates :calories, presence: true
  validates :protein, presence: true
  validates :fat, presence: true
  validates :carbohydrates, presence: true
end