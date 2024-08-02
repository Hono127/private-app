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
