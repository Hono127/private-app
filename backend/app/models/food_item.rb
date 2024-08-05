class FoodItem < ApplicationRecord
  has_many :meal_detail_items

  validates :name, presence: true
  validates :calories, presence: true
  validates :protein, presence: true
  validates :fat, presence: true
  validates :carbohydrates, presence: true
end