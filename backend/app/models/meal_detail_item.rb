# app/models/meal_detail_item.rb
class MealDetailItem < ApplicationRecord
  belongs_to :meal_item
  belongs_to :food_item

  validates :quantity, presence: true
end