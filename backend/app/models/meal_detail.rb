# app/models/meal_detail.rb
class MealDetail < ApplicationRecord
  belongs_to :meal
  belongs_to :food

  validates :quantity, presence: true
end