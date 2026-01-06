# TodoApp

シンプルで使いやすい Todo アプリケーションです。タスクの追加、完了、削除、そして完了したタスクを未完了に戻す機能を備えています。

## 機能

- タスクの追加
- タスクの完了
- タスクの削除
- 完了したタスクを未完了に戻す
- 未完了と完了のタスクを分けて表示

## 技術スタック

- **Next.js** 15.1.2 - React フレームワーク
- **React** 19.0.0 - UI ライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - スタイリング
- **Turbopack** - 高速なビルドツール

## セットアップ

### 前提条件

- Node.js (推奨: v18 以上)
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd TodoApp
```

2. 依存関係をインストール

```bash
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## スクリプト

- `npm run dev` - 開発サーバーを起動（Turbopack 使用）
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLint でコードをチェック

## プロジェクト構造

```
TodoApp/
├── app/
│   ├── components/
│   │   └── testTodo.tsx    # メインのTodoコンポーネント
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # ホームページ
│   ├── globals.css          # グローバルスタイル
│   └── style.css            # カスタムスタイル
├── package.json
└── README.md
```

## 使い方

1. **タスクの追加**: 入力フィールドにタスクを入力して「追加」ボタンをクリック
2. **タスクの完了**: 未完了のタスクの「完了」ボタンをクリックすると、完了リストに移動
3. **タスクの削除**: 未完了のタスクの「削除」ボタンをクリック
4. **タスクを戻す**: 完了したタスクの「戻す」ボタンをクリックすると、未完了リストに戻る

## ライセンス

このプロジェクトはプライベートプロジェクトです。
