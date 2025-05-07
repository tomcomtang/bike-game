MyGame.MyLotto = function (game) {
};

MyGame.MyLotto.prototype = {
    create: function () {
        this.add.image(0, 0, 'myLotto_bg');

        this.totalScore = this.add.text(game.world.width / 2, 370, "A wave of Phaser games", { font: "bold 42px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.totalScore.anchor.set(0.5, 0);
        //this.totalScore.lineSpacing = 20;

        this.developer = this.add.text(game.world.width / 2, 550, "Phaser Station", { font: "bold 50px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.developer.anchor.set(0.5, 0);

        this.awardTime = this.add.text(game.world.width / 2, 680, 'Award Time\n' + "Right Now", { font: "42px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.awardTime.anchor.set(0.5, 0);
        this.awardTime.lineSpacing = 10;

        this.awardAddress = this.add.text(game.world.width / 2, 860, 'Award Address\n' + "www.phaser-china.com", { font: "42px Microsoft YaHei", fill: "#5b3716", align: "center" });
        this.awardAddress.anchor.set(0.5, 0);
        this.awardAddress.lineSpacing = 20;

        var closeBtn = game.add.button(game.world.width - 20, 20, 'ico', function () {
            game.state.start('MainMenu')
        }, this);
        closeBtn.anchor.set(1, 0);
        closeBtn.frameName = 'close.png';
        GameUI.cutscenes()
    }
};