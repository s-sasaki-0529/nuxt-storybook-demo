# Nuxt Storybook Demo

このプロジェクトは、Nuxt 3.16.1を使用したデモアプリケーションです。

## プロジェクト仕様

- Nuxt 3.16.1
- TypeScript
- SPAモード (SSR無効)
- オートインポート有効

## AIエージェント向けガイドライン

このプロジェクトはAIエージェント（Cline）によって開発されています。以下の要件に従ってコードを生成してください：

### 技術要件

1. **SPAモード**
   - SSRは無効化されています
   - すべての処理はクライアントサイドで実行されます

2. **TypeScript**
   - 厳格モードが有効化されています
   - 適切な型定義を行ってください

3. **コンポーネント構造**
   - コンポーネントは `components/` ディレクトリに配置
   - 適切なコンポーネント分割を行う
   - Props、Emitsは明示的に型定義する

4. **必須の機能実装**
   - `useState` の使用
   - `<NuxtLink>` コンポーネントの使用
   - `<Teleport>` コンポーネントの使用

### ディレクトリ構造

```
nuxt-storybook-demo/
├── components/     # 再利用可能なコンポーネント
├── pages/         # ルーティング用のページコンポーネント
├── composables/   # 共有可能なロジック
└── types/         # TypeScript型定義
```

### コーディング規約

1. **ファイル命名**
   - コンポーネント: PascalCase（例: `MessageBox.vue`）
   - その他のファイル: camelCase

2. **コンポーネントの構造**
   ```vue
   <script setup lang="ts">
   // 1. 型インポート
   // 2. Props/Emits定義
   // 3. リアクティブな状態
   // 4. メソッド
   </script>

   <template>
     <!-- テンプレート -->
   </template>

   <style scoped>
   /* スタイル */
   </style>
   ```

3. **TypeScript**
   - Interface/Type定義は明示的に行う
   - `any` の使用は避ける
   - Nullableな値は明示的に型定義する

### 開発フロー

1. 機能追加時は以下の手順で実装：
   - コンポーネントの型定義
   - コンポーネントの実装
   - ページへの組み込み

2. コミットメッセージの形式：
   ```
   feat: 新機能の追加
   fix: バグ修正
   refactor: リファクタリング
   docs: ドキュメント更新
