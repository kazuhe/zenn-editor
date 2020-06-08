import { cliCommand } from ".";

export const exec: cliCommand = (argv) => {
  console.log(`
  Command:
    zenn preview      コンテンツをブラウザでプレビュー
    zenn              zenn previewのエイリアス
    zenn add:article  新しいarticleを追加
    zenn add:book     新しいbookを追加
  `);
  process.exit(0);
};