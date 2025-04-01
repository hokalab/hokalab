# HōkaLab プロジェクト

HōkaLabは、駆け出しプログラマーが日々の学びを活かして開発する小さなWebサービス集です。

## プロジェクト構成

このプロジェクトは現在、静的なウェブサイトとして運用されていますが、今後はPythonなどを使用したアプリ開発も行っていく予定です。

### ファイル構成

```
/
├── index.html       # メインのHTMLファイル
├── script.js        # JavaScriptファイル
├── css/             # CSSディレクトリ（モジュール化されたスタイル）
│   ├── base.css     # 基本設定
│   ├── components.css # ボタン、カードなどのコンポーネント
│   ├── layout.css   # ヘッダー、フッターなどのレイアウト
│   └── responsive.css # レスポンシブデザイン
├── README.md        # プロジェクト説明
└── .gitignore       # Git管理対象外ファイル
```

## 開発環境のセットアップ

1. リポジトリをクローン
   ```bash
   git clone https://github.com/hokalab/hokalab.git
   cd hokalab
   ```

2. ウェブサイト開発（現在）
   ```bash
   # VSCodeのLive Server拡張機能を使用
   # または
   python -m http.server 8000
   ```

3. アプリ開発（今後）
   ```bash
   # 仮想環境のセットアップ
   python -m venv venv
   source venv/bin/activate  # Windowsの場合: venv\Scripts\activate
   pip install -r requirements.txt
   ```

## デプロイ

このプロジェクトはRenderを使用して自動デプロイされています。

- デプロイURL: https://hokalab.onrender.com
- GitHubリポジトリ: https://github.com/hokalab/hokalab

mainブランチに変更をプッシュすると、自動的にデプロイが開始されます。

## CSSの管理について

CSSファイルはモジュール化されており、以下の4つのファイルに分割されています：

1. `base.css` - 基本設定（カラー変数、タイポグラフィ、共通要素など）
2. `components.css` - UIコンポーネント（ボタン、カード、バッジなど）
3. `layout.css` - ページレイアウト（ヘッダー、フッター、セクションなど）
4. `responsive.css` - レスポンシブデザイン（メディアクエリなど）

この分割により、CSSの管理が容易になり、必要な部分だけを修正できるようになっています。

## サービス

### はてなブックマーク RSS

はてなブックマークのホットエントリーから指定したブックマーク数以上の記事を取得し、RSS形式で提供するサービスです。IFTTTと連携して、新しい人気記事の通知を自動化できます。

- URL: https://hatena-bookmark-app.onrender.com/

### TrailSync

ヤマレコのGPXファイルをRunkeeper互換フォーマットに変換するツールです。特に複数日にわたるアクティビティデータの正確な変換に対応しています。

- URL: https://trailsync-ziew.onrender.com/
- 特徴:
  - 複数日にわたるアクティビティデータの正確な変換
  - アクティビティタイプの明示的な指定（ハイキング、ランニングなど）
  - メタデータセクションの追加
  - XMLフォーマットの構造化オプション