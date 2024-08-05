# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_08_05_090958) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "food_items", force: :cascade do |t|
    t.string "name"
    t.float "calories"
    t.float "protein"
    t.float "fat"
    t.float "carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.float "calories"
    t.float "protein"
    t.float "fat"
    t.float "carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meal_detail_items", force: :cascade do |t|
    t.bigint "meal_item_id", null: false
    t.bigint "food_item_id", null: false
    t.float "quantity"
    t.float "calories"
    t.float "protein"
    t.float "fat"
    t.float "carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_item_id"], name: "index_meal_detail_items_on_food_item_id"
    t.index ["meal_item_id"], name: "index_meal_detail_items_on_meal_item_id"
  end

  create_table "meal_details", force: :cascade do |t|
    t.bigint "meal_id"
    t.bigint "food_id"
    t.float "quantity"
    t.float "calories"
    t.float "protein"
    t.float "fat"
    t.float "carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_id"], name: "index_meal_details_on_food_id"
    t.index ["meal_id"], name: "index_meal_details_on_meal_id"
  end

  create_table "meal_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "meal_type"
    t.date "meal_date"
    t.float "total_calories"
    t.float "total_protein"
    t.float "total_fat"
    t.float "total_carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_meal_items_on_user_id"
  end

  create_table "meals", force: :cascade do |t|
    t.bigint "user_id"
    t.string "meal_type"
    t.date "meal_date"
    t.float "total_calories"
    t.float "total_protein"
    t.float "total_fat"
    t.float "total_carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_meals_on_user_id"
  end

  create_table "progress_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.date "measurement_date"
    t.float "weight"
    t.float "body_fat_percentage"
    t.text "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_progress_items_on_user_id"
  end

  create_table "progresses", force: :cascade do |t|
    t.bigint "user_id"
    t.date "measurement_date"
    t.float "weight"
    t.float "body_fat_percentage"
    t.text "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_progresses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "gender"
    t.float "height"
    t.float "weight"
    t.integer "age"
    t.string "activity_level"
    t.string "goal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "meal_detail_items", "food_items"
  add_foreign_key "meal_detail_items", "meal_items"
  add_foreign_key "meal_details", "foods"
  add_foreign_key "meal_details", "meals"
  add_foreign_key "meal_items", "users"
  add_foreign_key "meals", "users"
  add_foreign_key "progress_items", "users"
  add_foreign_key "progresses", "users"
end
