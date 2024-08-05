class User < ApplicationRecord
  has_secure_password
  has_many :meal_items

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :gender, presence: true
  validates :height, presence: true
  validates :weight, presence: true
  validates :age, presence: true
  validates :activity_level, presence: true
  validates :goal, presence: true
end