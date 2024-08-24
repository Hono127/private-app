## Users

ID (PK)
名前
メールアドレス
パスワード
性別
身長
体重
年齢
活動レベル
目標

## Foods

ID (PK)
名前
カロリー
タンパク質
脂質
炭水化物

## Meals

ID (PK)
ユーザーID (FK)
食事の種類
食事の日付
合計カロリー
合計タンパク質
合計脂質
合計炭水化物

## MealDetails

ID (PK)
食事ID (FK)
食品ID (FK)
量
カロリー
タンパク質
脂質
炭水化物

## Progress

ID (PK)
ユーザーID (FK)
測定日
体重
体脂肪率
コメント
