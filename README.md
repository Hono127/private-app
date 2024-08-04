# Private App

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

| 画面                     | URL         | 説明                                                         |
| ------------------------ | ----------- | ------------------------------------------------------------ |
| ホーム画面               | `/`         | ユーザーの概要、ナビゲーションメニュー、最近の活動のサマリー |
| 食事入力画面             | `/meal/new` | 新しい食事の入力フォームを表示                               |
| 目標設定画面             | `/goals`    | 目標の設定フォームを表示                                     |
| 食品データベース検索画面 | `/foods`    | 食品データベースを検索するための検索バーと結果を表示         |
| 進捗報告画面             | `/progress` | 体重や体脂肪率のグラフ、最近の食事、目標達成状況を表示       |

## ディレクトリ構成

```
src
├── app
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   └── PrimaryButton.tsx
│   │   │   ├── Heading
│   │   │   │   ├── Heading1.tsx
│   │   │   │   └── Heading2.tsx
│   │   │   ├── Input
│   │   │   │   └── Input.tsx
│   │   │   └── LabelHead
│   │   │       └── LabelHead.tsx
│   │   ├── molecules
│   │   │   ├── ContentsBox.tsx
│   │   │   └── InputBox.tsx
│   │   ├── organisms
│   │   │   ├── Form.tsx
│   │   │   └── LineCharts.tsx
│   │   └── templates
│   │       └── Wrapper.tsx
│   ├── favicon.ico
│   ├── foods
│   │   └── page.tsx
│   ├── globals.css
│   ├── goals
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── meal
│   │   └── new
│   │       └── page.tsx
│   ├── page.tsx
│   └── progress
│       └── page.tsx
```
