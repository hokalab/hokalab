# HōkaLabs プロジェクト

HōkaLabsは、駆け出しプログラマーが日々の学びを活かして開発する小さなWebサービス集です。

## プロジェクト構成

このプロジェクトは現在、静的なウェブサイトとして運用されていますが、今後はPythonなどを使用したアプリ開発も行っていく予定です。`.clinerules` に従って、以下のようなディレクトリ構造を段階的に整備していきます。

### ローカル開発環境のファイル構成

- `hokalabs/` - ウェブサイト関連ファイル（ローカル開発用）
  - `index.html` - メインのHTMLファイル
  - `styles.css` - スタイルシート
  - `script.js` - JavaScriptファイル
- `index.html` - メインのHTMLファイル（GitHubリポジトリ用）
- `styles.css` - スタイルシート（GitHubリポジトリ用）
- `script.js` - JavaScriptファイル（GitHubリポジトリ用）
- `.gitignore` - Git管理対象外ファイル
- `README.md` - このファイル

### GitHubリポジトリのファイル構成

```
/
├── index.html       # メインのHTMLファイル
├── styles.css       # スタイルシート
├── script.js        # JavaScriptファイル
├── README.md        # プロジェクト説明
└── .gitignore       # Git管理対象外ファイル
```

## 開発環境のセットアップ

1. VSCodeでプロジェクトを開く
   ```bash
   code hokalabs-project.code-workspace
   ```

2. ウェブサイト開発（現在）
   ```bash
   # VSCodeのLive Server拡張機能を使用
   # または
   cd hokalabs && python -m http.server 8000
   ```

3. アプリ開発（今後）
   ```bash
   # 仮想環境のセットアップ
   python -m venv venv
   source venv/bin/activate  # Windowsの場合: venv\Scripts\activate
   pip install -r requirements.txt
   ```

## ローカル開発とGitHubリポジトリの同期

ローカルでは`hokalabs`ディレクトリ内でファイルを編集し、GitHubリポジトリにはルートディレクトリにファイルを配置する必要があります。以下の手順で同期を行います：

1. `hokalabs`ディレクトリ内でファイルを編集する
2. 編集したファイルをルートディレクトリにコピーする
   ```bash
   cp hokalabs/index.html hokalabs/styles.css hokalabs/script.js .
   ```
3. 変更をコミットしてプッシュする
   ```bash
   git add .
   git commit -m "Update website files"
   git push origin master
   ```

## デプロイ

このプロジェクトはRenderを使用して自動デプロイされています。

- デプロイURL: https://hokalabs.onrender.com
- GitHubリポジトリ: https://github.com/mump0nd/hokalabs

masterブランチに変更をプッシュすると、自動的にデプロイが開始されます。

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