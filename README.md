# ↓↓↓↓↓↓リポジトリ移転しました
https://github.com/Hono127/fitness

# Fitness App

## [wiki](https://github.com/Hono127/private-app/wiki/Fitness%E2%80%90App)
## [Todo](https://github.com/users/Hono127/projects/2)

## 環境構築手順

### フロントエンド

1. リポジトリをクローン

   ```bash
   git clone git@github.com:Hono127/private-app.git
   cd private-app/frontend
   ```

2. 依存関係をインストール

   ```bash
   npm install
   ```

3. 環境変数の設定

   `.env.example`をコピーして、`.env.local`として保存します。

   ```bash
   cp .env.example .env.local
   ```

4. 開発サーバーを起動

   ```bash
   npm run dev
   ```

### バックエンド

1. リポジトリをクローン

   ```bash
   git clone git@github.com:Hono127/private-app.git
   cd private-app/backend
   ```

2. 依存関係をインストール

   ```bash
   bundle install
   ```

3. データベース設定を更新

   `config/database.yml`ファイルを自分の環境に合わせて更新します。

4. データベースを作成

   ```bash
   rails db:create
   rails db:migrate
   ```

5. Rails サーバーを起動

   ```bash
   rails server -p 3001
   ```

- ローカル
  - http://localhost:3300/
  - http://localhost:3001/

## URL 設計

| 画面名              | パス                     | 説明                                       |
|---------------------|--------------------------|--------------------------------------------|
| ホーム画面          | `/page.tsx`              | ホーム画面のページ |
| 食品データベース検索画面 | `/foods/page.tsx`    | 食品データベース検索画面のページ           |
| 目標設定画面        | `/goals/page.tsx`        | 目標設定画面のページ                       |
| ログイン画面        | `/login/page.tsx`        | ログイン画面のページ                       |
| 新しい食事記録画面 | `/meal/new/page.tsx`     | 新しい食事を記録する画面のページ           |
| 進捗報告画面        | `/progress/page.tsx`     | 進捗報告画面のページ                       |
| 設定画面            | `/settings/page.tsx`     | 設定画面のページ                           |
| 会員登録画面        | `/signup/page.tsx`       | 会員登録画面のページ                       |

## ディレクトリ構成

### フロントエンド
```
public
├── next.svg
└── vercel.svg
src
├── app
│   ├── api
│   │   └── axios.js
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   └── PrimaryButton.tsx
│   │   │   ├── Heading
│   │   │   │   ├── Heading1.tsx
│   │   │   │   └── Heading2.tsx
│   │   │   ├── Input
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── RadioFemale.tsx
│   │   │   │   └── RadioMale.tsx
│   │   │   ├── LabelHead
│   │   │   │   └── LabelHead.tsx
│   │   │   └── Text
│   │   │       └── ErrorText.tsx
│   │   ├── molecules
│   │   │   ├── ActivityLevelSelection.tsx
│   │   │   ├── ContentsBox.tsx
│   │   │   ├── GenderSelection.tsx
│   │   │   ├── GoalSelection.tsx
│   │   │   ├── InputAge.tsx
│   │   │   ├── InputBox.tsx
│   │   │   ├── InputHigh.tsx
│   │   │   ├── InputWeight.tsx
│   │   │   ├── ResultClacBox.tsx
│   │   │   └── UserGreeting.tsx
│   │   ├── organisms
│   │   │   ├── Form.tsx
│   │   │   ├── HumbergerMenu.tsx
│   │   │   ├── LineCharts.tsx
│   │   │   └── ResultDisplay.tsx
│   │   └── templates
│   │       └── Wrapper.tsx
│   ├── context
│   │   └── UserContext.tsx
│   ├── favicon.ico
│   ├── foods
│   │   └── page.tsx
│   ├── globals.css
│   ├── goals
│   │   └── page.tsx
│   ├── hooks
│   │   └── useUserName.ts
│   ├── layout.tsx
│   ├── login
│   │   └── page.tsx
│   ├── meal
│   │   └── new
│   │       └── page.tsx
│   ├── page.tsx
│   ├── progress
│   │   └── page.tsx
│   ├── settings
│   │   └── page.tsx
│   └── signup
│       └── page.tsx
└── lib
    └── supabaseClient.ts
```

### バックエンド
```
app
├── assets
│   ├── config
│   │   └── manifest.js
│   ├── images
│   └── stylesheets
│       └── application.css
├── channels
│   └── application_cable
│       ├── channel.rb
│       └── connection.rb
├── controllers
│   ├── api
│   │   └── v1
│   │       └── health_controller.rb
│   ├── application_controller.rb
│   ├── concerns
│   ├── food_items_controller.rb
│   ├── meal_detail_items_controller.rb
│   ├── meal_items_controller.rb
│   ├── progress_items_controller.rb
│   ├── sessions_controller.rb
│   ├── static_controller.rb
│   ├── users
│   └── users_controller.rb
├── helpers
│   ├── application_helper.rb
│   ├── food_items_helper.rb
│   ├── meal_detail_items_helper.rb
│   ├── meal_items_helper.rb
│   ├── progress_items_helper.rb
│   └── static_helper.rb
├── jobs
│   └── application_job.rb
├── mailers
│   └── application_mailer.rb
├── models
│   ├── application_record.rb
│   ├── concerns
│   ├── food.rb
│   ├── food_item.rb
│   ├── meal.rb
│   ├── meal_detail.rb
│   ├── meal_detail_item.rb
│   ├── meal_item.rb
│   ├── progress.rb
│   ├── progress_item.rb
│   └── user.rb
└── views
    ├── food_items
    ├── layouts
    │   ├── application.html.erb
    │   ├── mailer.html.erb
    │   └── mailer.text.erb
    ├── meal_detail_items
    ├── meal_items
    ├── progress_items
    └── static
        └── test.html.erb
bin
├── rails
├── rake
└── setup
config
├── application.rb
├── boot.rb
├── cable.yml
├── credentials.yml.enc
├── database.yml
├── environment.rb
├── environments
│   ├── development.rb
│   ├── production.rb
│   └── test.rb
├── initializers
│   ├── assets.rb
│   ├── content_security_policy.rb
│   ├── cors.rb
│   ├── filter_parameter_logging.rb
│   ├── inflections.rb
│   └── permissions_policy.rb
├── locales
│   └── en.yml
├── puma.rb
├── routes.rb
└── storage.yml
db
├── migrate
│   ├── 20240805080853_create_users.rb
│   ├── 20240805081035_create_foods.rb
│   ├── 20240805081044_create_meals.rb
│   ├── 20240805081050_create_meal_details.rb
│   ├── 20240805081059_create_progresses.rb
│   ├── 20240805090742_create_food_items.rb
│   ├── 20240805090944_create_meal_items.rb
│   ├── 20240805090952_create_meal_detail_items.rb
│   └── 20240805090958_create_progress_items.rb
├── schema.rb
└── seeds.rb
lib
├── assets
└── tasks
log
└── development.log
public
├── 404.html
├── 422.html
├── 500.html
├── apple-touch-icon-precomposed.png
├── apple-touch-icon.png
├── favicon.ico
└── robots.txt
storage
test
├── application_system_test_case.rb
├── channels
│   └── application_cable
│       └── connection_test.rb
├── controllers
│   ├── food_items_controller_test.rb
│   ├── meal_detail_items_controller_test.rb
│   ├── meal_items_controller_test.rb
│   ├── progress_items_controller_test.rb
│   └── static_controller_test.rb
├── fixtures
│   ├── files
│   ├── food_items.yml
│   ├── meal_detail_items.yml
│   ├── meal_items.yml
│   └── progress_items.yml
├── helpers
├── integration
├── mailers
├── models
│   ├── food_item_test.rb
│   ├── meal_detail_item_test.rb
│   ├── meal_item_test.rb
│   └── progress_item_test.rb
├── system
└── test_helper.rb
vendor

```
