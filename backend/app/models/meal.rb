# app/models/meal.rb
class Meal < ApplicationRecord
  belongs_to :user
  has_many :meal_details
  has_many :foods, through: :meal_details

  validates :meal_type, presence: true
  validates :meal_date, presence: true
end