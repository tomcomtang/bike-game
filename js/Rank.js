MyGame.Rank = function (game) {
};

MyGame.Rank.prototype = {
  create: function () {

    rankTable = [
      {
        rank: 1,
        name: 'phaser1',
        total: '1.123 km'
      },
      {
        rank: 2,
        name: 'phaser2',
        total: '1.003 km'
      },
      {
        rank: 3,
        name: 'phaser3',
        total: '0.987 km'
      },
      {
        rank: 4,
        name: 'phaser4',
        total: '0.909 km'
      },
      {
        rank: 5,
        name: 'phaser5',
        total: '0.876 km'
      },
      {
        rank: 6,
        name: 'phaser6',
        total: '0.870 km'
      },
      {
        rank: 7,
        name: 'phaser7',
        total: '0.859 km'
      },
      {
        rank: 8,
        name: 'phaser8',
        total: '0.709 km'
      }
    ];

    this.add.image(0, 0, 'rank_bg');

    var rankGroup = this.add.group();


    var style = { font: "32px Microsoft YaHei", fill: "#3e3e3e" };
    game.rankBoxHeight = 103 * rankTable.length;

    game.rankBox = game.add.graphics(0, 0);
    game.rankBox.beginFill(0xff0000, 0);
    game.rankBox.drawRect(0, 0, 605, game.rankBoxHeight);
    game.rankBox.endFill();

    game.rankBoxCover = game.add.graphics(0, 0);
    game.rankBoxCover.beginFill(0xff0000, .2);
    game.rankBoxCover.drawRect(0, 0, 605, 630);
    game.rankBoxCover.endFill();


    game.rankBox.x = game.rankBoxCover.x = 73;
    game.rankBox.y = game.rankBoxCover.y = 330;

    game.rankBox.mask = game.rankBoxCover;

    for (var i = 0; i <= rankTable.length - 1; i++) {
      var rankNum = this.add.text(30, i * 100 + 20, rankTable[i].rank, style)
      game.rankBox.addChild(rankNum);
      var rankName = this.add.text(160, i * 100 + 20, rankTable[i].name, style)
      game.rankBox.addChild(rankName);
      var rankTotal = this.add.text(160, i * 100 + 65, rankTable[i].total, style)
      game.rankBox.addChild(rankTotal)
    }

    if (rankTable.length > 6) {
      game.rankBox.inputEnabled = true;
      game.rankBox.input.enableDrag();
      game.rankBox.input.allowHorizontalDrag = false;
      game.rankBox.events.onDragUpdate.add(this.dragUpdate);
    }

    var totalScoreTexts = this.add.text(game.world.width / 2, game.world.height - 160, '365 Riding Festival, I rode ' + game.score + ' km', { font: "bold 36px Microsoft YaHei", fill: "#5b3716" })
    totalScoreTexts.anchor.set(0.5, 0);

    var closeBtn = game.add.button(game.world.width - 20, 20, 'ico', function () {
      game.state.start('MainMenu')
    }, this);
    closeBtn.anchor.set(1, 0);
    closeBtn.frameName = 'close.png';

    GameUI.cutscenes()
  },
  dragUpdate: function (i) {
    if (i.y >= 330) i.y = 330;
    if (i.y <= 330 - (game.rankBoxHeight - 630)) i.y = 330 - (game.rankBoxHeight - 630);
  }
};