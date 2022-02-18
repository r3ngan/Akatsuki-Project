var Discord = require("discord.js"),
    client = new Discord.Client();
const {
    red,
    green,
    blue,
    yellow,
    cyan,
    white
} = require("chalk");
var config;
config = require("./config.js");
var token = config.token,
    prefix = config.prefix,
    color = config.color,
    image = config.image,
    msgconsole = config.msgconsole;
client.on('ready', () => {
    console.log(yellow("============================================================================"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "help"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'raid'));
    console.log(cyan("[COMMAND LIST] | " + prefix + "hack"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "mod"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "user"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "divers"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "deletechannels"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "spam [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "stopspam"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "mpall [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "deleterole"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "banall"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "unbanall"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "deface [imageurl]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'createroles [text]'));
    console.log(cyan("[COMMAND LIST] | " + prefix + "createchannels [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "createadminrole"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "renameall [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "ddos [ip]"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "iplog [lien]"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "token [@mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "ban [@mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "purge [nombre]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "stream [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "listen [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "watch [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "play [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "pp [imageurl]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "avatar [@mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'online'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "away"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + +'dnd'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "invisible"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "multistream"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'embed [text]'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'ping'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "shutdown"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "infos [mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "serverinfos"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "nsfw"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "gif [text]"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "listgif"));
    console.log(yellow("============================================================================"));
    console.log(blue("██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗"));
    console.log(blue("╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝"));
    console.log(blue(''));
    console.log(blue(''));
    console.log(blue("   █████╗   ██╗  ██╗   █████╗   ████████╗  ███████╗  ██╗   ██╗  ██╗  ██╗  ██╗"));
    console.log(blue("  ██╔══██╗  ██║ ██╔╝  ██╔══██╗  ╚══██╔══╝  ██╔════╝  ██║   ██║  ██║ ██╔╝  ██║"));
    console.log(blue("  ███████║  █████╔╝   ███████║     ██║     ███████╗  ██║   ██║  █████╔╝   ██║"));
    console.log(blue("  ██╔══██║  ██╔═██╗   ██╔══██║     ██║     ╚════██║  ██║   ██║  ██╔═██╗   ██║"));
    console.log(blue("  ██║  ██║  ██║  ██╗  ██║  ██║     ██║     ███████║  ╚██████╔╝  ██║ ██║   ██║"));
    console.log(blue("  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝     ╚═╝     ╚══════╝   ╚═════╝   ╚═╝ ╚═╝   ╚═╝"));
    console.log(blue(''));
    console.log(blue(''));
    console.log(blue("██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗"));
    console.log(blue("╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝"));
    console.log(yellow("============================================================================"));
    console.log(green("[SELFBOT] | NOUS NE SOMMES PAS RESPONSABLE DE VOS ACTES"));
    console.log(green('[SELFBOT] | COMME LES SELFBOTS SONT CONTRE LES TOS DE DISCORD VOUS POUVEZ RISQUEZ UN BANNISEMENT DISCORD'));
    console.log(green("[SELFBOT] | Connectée sous le compte : " + client.user.username));
    console.log(green("[SELFBOT] | Prefix Choisi : " + prefix));
    console.log(green('[SELFBOT] | Version : 1.0'));
    console.log(green("[SELFBOT] | Devlopped by Freeze"));
    console.log(green('[SELFBOT] | Modified by Sans'))
    console.log(green("[SELFBOT] | " + msgconsole));
    console.log(yellow("============================================================================"));
    console.log(red("Profitez bien du selfbot :)"));
})

var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
let rpcGenerator = require("discordrpcgenerator")
client.on("ready", function () {
    rpcGenerator.getRpcImage("944283707475378226", "akatsuki").then(img1 => {
        rpcGenerator.getRpcImage("944283707475378226", "akatsuki").then(img2 => {
            let presence = new rpcGenerator.Rpc()
                .setName('Akatsuki PROJECT')
                .setUrl('https://www.twitch.tv/codezero_two_')
                .setType('STREAMING')
                .setApplicationId('944283707475378226')
                .setDetails('Akatsuki')
                .setAssetsLargeImage(img2.id)
                .setAssetsSmallImage(img1.id)
                .setAssetsLargeText('Akatsuki PROJECT')
                .setState('Akatsuki Selfbot')
                .setStartTimestamp(Date.now())
                .setParty({
                    id: uuid()
                });
            client.user.setPresence(presence.toDiscord()).catch(console.error);
        });
    });
});


client.on('message', function (message) {
    const args = message.content.split(' ').slice(1);
    if (message.author == client.user) {
        if (message.content.startsWith(prefix + "help")) {
            message.delete();
            const embedv2 = ("```python\n⚙️ Menu aide\n\n" + prefix + "hack » Commandes hack.\n" + prefix + "mod » Commandes modération.\n" + prefix + "user » Commandes users.\n" + prefix + "divers » Commandes divers.\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle("⚙️ Menu d'aide")
                .setDescription("[**Download**](https://github.com/AkatsukiProject/Akatsuki-Project) | [**Support**](https://discord.gg/aZ5Z3PFv3K)")
                .setColor(color)
                .addField('hack', "Affichez la liste de commande pour hack des gens.")
                .addField("mod", "Affichez la liste de commande pour modérer des serveurs.")
                .addField("user", "Affichez la liste de commande des users.")
                .setImage("https://media.giphy.com/media/ZygoJJk5Z6mtdTPJzU/giphy.gif")
                .addField("divers", "Affichez la liste de commande pour t'amuser.")
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "raid")) {
            message.delete();
            var embedv2 = ("```python\n🔨 Menu de Raid\n\n" + prefix + "deletechannels » Supprime tous les salons\n" + prefix + "spam [text] » Spam un message !\n" + prefix + "stopspam » Stop le spam !\n" + prefix + "mpall [text] » Envoie un message privé à tous les membres du serveur\n" + prefix + "deleterole » Supprime tous les roles\n" + prefix + "banall » Ban tous les membres\n" + prefix + "unbanall » Révique tous les banissements\n" + prefix + "deface [imageurl] » Renomme un serveur, change la région et la photo de serveur\n" + prefix + "createroles [text] » Créé beaucoup de rôles\n" + prefix + "createchannels [text] » Créé beaucoup de salons\n" + prefix + "createadminrole » Créé un rôle administrateur\n" + prefix + "renameall [text] » Renomme tous les membres du serveur\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle(":hammer: Menu de Raid")
                .setColor(color)
                .addField("**deletechannels**", "Supprime tous les salons !")
                .addField("**spam [text]**", "Spam un message !")
                .addField("**stopspam**", "Stop le spam !")
                .addField("**mpall [text]**", 'Envoie un message privé à tous les membres du serveur !')
                .addField("**deleterole**", "Supprime tous les roles !")
                .addField("**banall**", "Ban tous les membres !")
                .addField("**unbanall**", 'Révoque tous les bannissements !')
                .addField("**deface [imageurl]**", "Renomme le serveur, change la région et change la photo du serveur !")
                .addField("**createroles [text]**", "Créer beaucoup de roles !")
                .addField("**createchannels [text]**", "Créer beaucoup de channels !")
                .addField(`**createadminrole**`, `Crére un role administrateur !`)
                .addField(`**renameall [text]**`, `Renomme tout le serveur !`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "hack")) {
            message.delete();
        var embedv2 = ("```python\n💻 Menu de hack\n\n" + prefix + "ddos [ip] » DDOS une ip\n" + prefix + "iplog [lien] » Envoie un IP logger camouflé\n" + prefix + "token [@mention] » Trouve le token de la personne mentionnée\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle(':computer: Menu de hack')
                .setColor("RED")
                .addField("**ddos [ip]**", "Ddos une IP")
                .addField("**iplog [lien]**", 'Envoie un IP logger camouflé')
                .addField("token [@mention]", "Trouve le token de la personne mentionnée")
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + 'mod')) {
            message.delete();
            var embedv2 = ("```python\n🛠️ Menu de modération\n\n" + prefix + "kick [@mention] » Kick un utilisateur\n" + prefix + "ban [@mention] » Ban un utilisateur\n" + prefix + "purge [nombre] » Supprime un certain nombre de message\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle(":tools: Menu de modération")
                .setColor("GREEN")
                .addField(`**kick [@mention]**`, `Kick un utilisateur`)
                .addField(`**ban [@mention]**`, `Ban un utilisateur`)
                .addField(`**purge [nombre]**`, `Supprime un certain nombre de message`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "user")) {
            message.delete();
            var embedv2 = ("```python\n👥 Menu des utilisateurs\n\n" + prefix + "stream [text] » Te met en stream\n" + prefix + "listen [text] » Te met en écoute\n" + prefix + "watch [text] » Te met en regarde\n" + prefix + "play [text] » Te met en joue\n" + prefix + "pp [imageurl] » Modifie ta photo de profil\n" + prefix + "avatar [@mention] » Vol la photo de profil de la personne mentioné\n" + prefix + "online » Met ton status en \"connecté\"\n" + prefix + "away » Met ton status en \"inactif\"\n" + prefix + "dnd » Met ton status en \"Ne pas déranger\"\n" + prefix + "offline » Met ton status en \"invisible\"\n" + prefix + "multistream » Commande multistream\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle(`:busts_in_silhouette: Menu des utilisateurs`)
                .setColor(color)
                .addField(`**stream [text]**`, `Te met en stream`)
                .addField(`**listen [text]**`, `Te met en écoute`)
                .addField(`**watch [text]**`, `Te met en regarde`)
                .addField(`**play [text]**`, `Te met en joue`)
                .addField(`**pp [imageurl]**`, `Modifie ta photo de profil`)
                .addField(`**avatar [@mention]**`, `Vol la photo de profil de l'utilisateur mentionné`)
                .addField(`**online**`, `Met ton statut en "connecté"`)
                .addField(`**away**`, `Met ton statut en "inactif"`)
                .addField(`**dnd**`, `Met ton statut en "ne pas déranger"`)
                .addField(`**invisible**`, `Met ton statut en "invisible"`)
                .addField(`**multistream**`, `commande MultiStream`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "divers")) {
            message.delete();
            var embedv2 = ("```python\n🛠️ Menu de divertissement\n\n" + prefix + "embed [text} » Envoie un embed\n" + prefix + "ping » Ton ping\n" + prefix + "shutdown » ferme le Selfbot\n" + prefix + "info [@mention] » Envoie des infos de la personne mentionnée\n" + prefix + "serverinfo » Envoie les infos du serveur\n" + prefix + "nsfw » Envoie une image nsfw\n" + prefix + "gif [text] » Envoyer un gif\n" + prefix + "listgif » Pour afficher toute la liste des gifs disponibles\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle(`:tools: Menu de divertisssement`)
                .setColor(color)
                .addField(`**embed [text]**`, `Envoie un embed`)
                .addField(`**ping**`, `Ton ping`)
                .addField(`**shutdown**`, `Ferme le SelfBot`)
                .addField(`**infos [mention]**`, `Envoie des infos d'un utilisateur`)
                .addField(`**serverinfos**`, `Envoie les infos du serveur`)
                .addField(`**nsfw**`, `Envoie une image nsfw`)
                .addField(`**gif [text]**`, `Envoie un gif`)
                .addField(`**giflist**`, `Pour afficher toute la liste des gifs disponibles`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "token")) {
            message.delete();
            var t0ken = ["NTU4NjgxODczNDcyMDI4Njcy.D3aZOw.XWSbRuF8GwII1d_uO3A0OMDpBigqsdq", "NTUxNDY2MzYwMqsdqdqdjYyMzYxMTA5.D3q8Rw.7egR6Z2FRrJVJQo22KPJw94sqLY", "NTMwMTMyODIyMzMwMTc5NTg1.D0nsTQ._YtyrCwHOsVQRkk1XCFjkxZPMzA"];
                var embedv2 = ("Token trouvé", t0ken[Math.floor(Math.random() * t0ken.length)])
            message.channel.send(embedv2).catch(err => {});
        }
        if (message.content.startsWith(prefix + "kick")) {
            var membrs = message.mentions.members.first();
            membrs.kick().then(mbrs => {
                message.channel.send(":wave: " + mbrs.user.username + " c'est fait expulser").catch(e => {});
            });
        }
        if (message.content.startsWith(prefix + "ban")) {
            var membrs = message.mentions.members.first()
            membrs.ban().then(mbrs => {
                message.channel.send(':wave: ' + mbrs.user.username + " c'est fait bannir").catch(e => {});
            });
        }
        if (message.content == prefix + "nsfw") {
            message.delete()
            require('snekfetch').get('https://nekobot.xyz/api/image?type=ass').then(r => {
                    var embedv2 = (r.body.message)
                message.channel.send(embedv2)
            })
        }
        if (message.content.startsWith(prefix + 'serverinfos')) {
            if (message.channel.type === 'dm' || message.channel.type === "group") return
            message.delete();
            var embedv2 = ("```Nom : " + message.guild.name + "\nID : " + message.guild.id + "\nPropriétaire : " + message.guild.owner.user.tag + "\nRégion : " + message.guild.region+"\nMembres au total : " + message.guild.members.size +"\nHumains : "+ message.guild.members.filter(hum => !hum.user.bot).size +"\nBots : " + message.guild.members.filter(bot => bot.user.bot).size + "\nSalons/Catégories : "+ message.guild.channels.size +"\nRôles : "+ message.guild.roles.size +"\nDate de création : "+ message.guild.createdAt.toLocaleString() +"```")
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle(`${message.guild.name}`)
                .addField("__**Nom :**__", message.guild.name)
                .addField(`__**ID :**__`, `${message.guild.id}`, true)
                .addField('__**Propriétaire :**__', `${message.guild.owner.user.tag}`, true)
                .addField("__**Région :**__", message.guild.region, true)
                .addField("**Total | Humains | Bots**", message.guild.members.size + " membres au total |\n" + message.guild.members.filter(hum => !hum.user.bot).size + " humains |" + message.guild.members.filter(bot => bot.user.bot).size + " bots", true)
                .addField(`__**Salons/Catégories :**__`, message.guild.channels.size, true)
                .addField(`__**Roles :**__`, message.guild.roles.size, true)
                .addField("__**Date de création:**__", message.guild.createdAt.toLocaleString(), true)
                .setThumbnail(message.guild.iconURL)
                .setFooter("Selfbot créer par zyprox et xeno", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "avatar")) {
            message.delete();
            args[0] = message.mentions.members.first();
            var ava = args[0];
            var embedv2 = ("photo de profile de" + ava + "volée avec succès ! :white_check_mark: !")
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setThumbnail(ava.user.displayAvatarURL)
                .setDescription('Photo de profil de' + ava + 'volée avec succés ! :white_check_mark: !');
            client.user.setAvatar(ava.user.displayAvatarURL);
            message.channel.send(embedv2);
        }
        if (message.content === prefix + "unbanall") {
            message.deletable && message.delete();
            setInterval(function () {
                message.guild.fetchBans().then(function (unbanned) {
                    unbanned.forEach(function (bann3d) {
                        message.guild.unban(bann3d)
                    });
                });
            }, 1000);
            message.channel.send("Unban effectuée :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "ping")) {
            message.delete()
            message.channel.send(`Pong ! :white_check_mark: Retour en \`\`${Date.now() - message.createdTimestamp} ms\`\``)
        }
        if (message.content.startsWith(prefix + 'embed')) {
            message.delete();
            var embedv2 = ("> "+args.join(' '))
            var embed = new Discord.RichEmbed()
                .setTitle(args.join(' '))
                .setColor(color)
            message.channel.send(embedv2);
        }
        if (message.content == prefix + "shutdown") {
            message.delete()
            message.channel.send(`Fermeture du Selfbot...`)
            process.exit(1);
        }
        if (message.content.startsWith(prefix + "deface")) {
            message.delete()
            message.guild.setRegion("india")
            message.guild.setIcon(args.join(' '))
            message.guild.setName("FUCKED BY AKATSUKI")
            message.channel.send(`Deface réussi :white_check_mark:`);
        }
        if (message.content.startsWith(prefix + "purge")) {
            if (args) {
                if (args > 99) {
                    message.channel.bulkDelete(args.join(' '))
                } else {
                    message.channel.send(`Veuillez Mettre Un Nombre De Message A Delete En Dessous De 99 !`)
                }

            } else {
                message.channel.send(`Veuillez Donnez Un Nombre De Message A Delete !`)
            }
        }
        if (message.content.startsWith(prefix + 'pp')) {
            message.delete();
            var embedv2 = ("Changement de photo de profil réussi :white_check_mark: !")
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setThumbnail(args.join(' '))
                .setDescription(`Changement de photo de profil réussi :white_check_mark: !`);
            client.user.setAvatar(args.join(' '))
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + 'listgif')) {
            message.delete();
            var embedv2 = ("```python\n#=LISTE DES GIFS=#\n\n- issou\n- pissou\n- fissou\n- epilypsy\n- beveryone\n- genie\n- rage\n- fbi\n- hide\n- twerkdudos\n\n# Akatsuki PROJECT```")
            var embed = new Discord.RichEmbed()
                .setTitle("#=LISTE DES GIFS=#")
                .setColor(color)
                .setDescription("``issou``, ``pissou``, ``fissou``, ``epilypsy``, ``beveryone``, ``genie``, ``rage``, ``fbi``, ``hide``, ``twerkdudos``,")
                .setFooter("Akatsuki Project©", "https://media.discordapp.net/attachments/627432311704649739/631924472915558401/BigAromaticEthiopianwolf-max-1mb.gif")
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + 'gif')) {
            if (args.join('') == "pissou") {
                var embedv2 = ('https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif')
                var embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setImage("https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif")
                message.delete()
                message.channel.send(embedv2);
            } else {
                if (args.join('') == "fissou") {
                    var embedv2 = ('https://media1.tenor.com/images/26fd2476db9c26f146f548edbff22329/tenor.gif?itemid=9505759')
                    var embed = new Discord.RichEmbed()
                        .setColor(color)
                        .setImagr("https://media1.tenor.com/images/26fd2476db9c26f146f548edbff22329/tenor.gif?itemid=9505759")
                    message.delete()
                    message.channel.send(embedv2);
                } else {
                    if (args.join('') == 'epilepsy') {
                        var embedv2 = ('https://thumbs.gfycat.com/BrownEnormousAurochs-size_restricted.gif')
                        var embed = new Discord.RichEmbed()
                            .setColor(color)
                            .setImage("https://thumbs.gfycat.com/BrownEnormousAurochs-size_restricted.gif");
                        message.delete()
                        message.channel.send(embedv2);

                    } else {
                        if (args.join('') === 'hide') {
                            var embedv2 = ('https://i.makeagif.com/media/1-17-2016/kYqDeN.gif')
                            var embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setImage("https://i.makeagif.com/media/1-17-2016/kYqDeN.gif")
                            message.delete(),                 message.channel.send(embedv2);
                        } else {
                            if (args.join('') == "genie") {
                                var embedv2 = ('https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif')
                                var embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setImage("https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif")
                                message.delete()
                                message.channel.send(embedv2);
                            } else {
                                if (args.join('') == "rage") {
                                    var embedv2 = ('https://media1.tenor.com/images/f6c258315fe7e33007f18608fac32058/tenor.gif?itemid=14590435')
                                    var embed = new Discord.RichEmbed()
                                        .setColor(color)
                                        .setImage("https://media1.tenor.com/images/f6c258315fe7e33007f18608fac32058/tenor.gif?itemid=14590435")
                                    message.delete();
                                    message.channel.send(embedv2);
                                } else {
                                    if (args.join('') == "twerkdudos") {
                                        var embedv2 = ('https://i.pinimg.com/originals/31/39/cd/3139cd9c4d351e122b7f739f232de9a3.gif')
                                        var embed = new Discord.RichEmbed()
                                            .setColor(color)
                                            .setImage("https://i.pinimg.com/originals/31/39/cd/3139cd9c4d351e122b7f739f232de9a3.gif")
                                        message.delete()
                                        message.channel.send(embedv2);
                                    } else {
                                        if (args.join('') == "beveryone") {
                                            var embedv2 = ('https://thumbs.gfycat.com/KaleidoscopicFabulousFluke-size_restricted.gif')
                                            var embed = new Discord.RichEmbed()
                                                .setColor(color)
                                                .setImage("https://thumbs.gfycat.com/KaleidoscopicFabulousFluke-size_restricted.gif")
                                            message.delete()
                                            message.channel.send(embedv2);
                                        } else {
                                            if (args.join('') === "issou") {
                                                var embedv2 = ('https://media.tenor.com/images/90c22c0b985ea62cbd7af133d9c4f63e/tenor.gif')
                                                var embed = new Discord.RichEmbed()
                                                    .setColor(color)
                                                    .setImage("https://media.tenor.com/images/90c22c0b985ea62cbd7af133d9c4f63e/tenor.gif")
                                                message.delete()
                                                message.channel.send(embedv2);
                                            } else {
                                                if (!args.join('')) {
                                                    var embed = new Discord.RichEmbed()
                                                        .setColor(color)
                                                        .setTitle(`\`\`:warning: ERREUR : \`\`\nAucun gif n'est associé à ce nom, vous pouvez voir la liste des gifs avec: \`\`\`/giflist\`\`\``)
                                                    message.delete()
                                                    message.channel.send(embedv2);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (message.content.startsWith(prefix + "deletemoji")) {
            if (message.deletable) {
                message.delete();
                message.guild.emojis.forEach(emote => {
                    emote.delete();
                });
            }
        }
        if (message.content.startsWith(prefix + "deleterole")) {
            message.delete()
            message.guild.roles.forEach(role => {
                role.delete();
            })
            message.channel.send("Tous les roles ont été supprimés avec succés ! :white_check_mark:");
        }
        if (message.content === (prefix + 'banall')) {
            message.delete()
            message.guild.members.forEach(mbrs => {
                mbrs.ban();
            })
            message.channel.send("Ban all réussi :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "iplog")) {
            message.delete();
            console.log(green("[MESSAGE] | Salut moi c'est Sans ! Celui qui a repris le selfbot :)"))
            console.log(green('[SELFBOT] | Simple message pour te dire que la cmd iplog ne marche plus ^^" désolééé'))
        }
        if (message.content.startsWith(prefix + "ddos")) {
            message.delete();
            var embedv2 = ("DDOS lancé sur" + '`' + args.join(' ') + '`')
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle("DDOS lancé sur" + '`' + args.join(' ') + '`');
            message.channel.send(embedv2);
            var request = require("request")
            var timeout = 32768;
            console.log(yellow("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"))
            console.log(yellow("Selfbot Akatsuki Project©"))
            console.log(yellow("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"));
            var ip = args.join(' ')
            var ddos = 'http://' + ip;
            packet = function pack() {
                return code = 'H', code;
            }
            sendrequest = function sendreq(data) {
                request(ddos, function (error) {
                    if (error) return;
                });
            };
            sendrequest(packet)
            setInterval(function () {
                console.log(green("[PACKET SENT] = " + timeout));
            }, 1000);
        }
        if (message.content.startsWith(prefix + "infos")) {
            message.delete();
            args[0] = message.mentions.users.first();
            mention = args[0];
            var embedv2 = ("```Informations de "+args[0]+"\nID : "+mention.id+"\nFate de création du compte : "+mention.createdAt+"```")
            var embed = new Discord.RichEmbed()
                .setTitle(`__Informations de ${args[0]}__`)
                .setImage(mention.displayAvatarURL)
                .addField("__ID :__", mention.id)
                .addField('__Date decréation du compte : __', mention.createdAt)
                .setColor(color);
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "stream")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(' '),
                "type": "STREAMING",
                "url": "https://www.twitch.tv/codezero_two_"
            })
            message.channel.send("Ton activité est maintenant`" + args.join(' ') + " en streaming` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "listen")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(" "),
                "type": "LISTENING"
            })
            message.channel.send("Ton activité est maintenant `écoute " + args.join(" ") + "` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "watch")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(' '),
                "type": "WATCHING"
            })
            message.channel.send("Ton activitée est maintenant `Regarde " + args.join(" ") + "` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "play")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(' '),
                "type": "PLAYING"
            })
            message.channel.send("Ton activité est maintenant Joue à " + args.join(" ") + " :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "dnd")) {
            message.delete()
            client.user.setStatus("dnd", "zyprox")
            message.channel.send("Votre status est maintenant : `ne pas déranger` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "away")) {
            message.delete()
            client.user.setStatus("idle", "zyprox")
            message.channel.send("Votre status est maintenant : `inactif` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "invisible")) {
            message.delete()
            client.user.setStatus("invisible", "zyprox")
            message.channel.send("Votre status est maintenant : `invisible` :white_check_mark:");
        }
        if (message.content == prefix + "multistream") {
            message.delete();
            if (message.author.id == "627250023876263947") return;
            var i = 0;
            setInterval(function () {
                if (i === 0) {
                    client.user.setActivity({
                        "name": "Akatsuki Project©",
                        "type": "STREAMING",
                        "url": "https://www.twitch.tv/codezero_two_"
                    })
                    i = 1;
                } else {
                    if (i === 0) {
                        client.user.setActivity({
                            'type': "Streaming",
                            'url': "https://www.twitch.tv/codezero_two_"
                        }), i = 2;
                    } else {
                        if (i === 2) {
                            client.user.setActivity({
                                'type': "Streaming",
                                'url': "https://www.twitch.tv/codezero_two_"
                            }), i = 3;
                        } else {
                            if (i === 3) {
                                random = (Math.floor(Math.random() * 7), 1)
                                client.user.setActivity({
                                    'type': "Streaming",
                                    'url': "https://www.twitch.tv/codezero_two_"
                                }), i = 0;
                            }
                        }

                    }
                }
            }, 20, 2000);
            var embedv2 = ("Multistream en cours...")
            var embed = new Discord.RichEmbed()
                .setTitle("Multistream en cours...")
                .setColor('BLACK')
                .setImage("https://images-ext-2.discordapp.net/external/KcrrI8nWkCqfUdG6bKQM5UfhFv_EYNprmtfGTYozBSY/https/media2.giphy.com/media/Ai8iZqHx2i0fK/source.gif")
                .setFooter("Akatsuki Project©", "https://media.discordapp.net/attachments/797573920642564097/812019735406706758/image4.gif")
            message.channel.send(embedv2);
        }
        if (message.content.startsWith(prefix + "online")) {
            message.delete()
            client.user.setActivity('online', "zyprox")
            message.channel.send('Votre statut est maintenant: `connecté` :white_check_mark:');
        }
        if (message.content.startsWith(prefix + 'deletechannel')) {
            message.delete()
            message.guild.channels.forEach(chnls => {
                chnls.delete();
            });
        }
        var commandIntervals = []
        if (message.content.startsWith(prefix + 'spam')) {
            message.delete()
            if (message.channel.type == 'dm') return;
            var msgspam = message.content.split(' ').slice(1).join(' '),
                interval = setInterval(function () {
                    message.channel.send(msgspam);
                }, 1000);
            commandIntervals.push(interval);
        }
        if (message.content == prefix + 'stopspam') {
            message.delete()
            commandIntervals.forEach(interval => {
                clearInterval(interval)
            })
            message.channel.send('Arrêt du spam réussi :white_check_mark:');
        }
        if (message.content.startsWith(prefix + 'mpall')) {
            message.delete();
            if (message.channel.type === 'dm') return;
            var arg = message.content.split(" ").slice(1).join(" ");
            if (!arg) {
                message.channel.send(':warning: ERREUR');
            }
            message.guild.members.forEach(function (users) {
                users.send(arg).catch(e => {});
            })
            message.channel.send('MP all réussi :white_check_mark:');
        }
        if (message.content.startsWith(prefix + 'createroles')) {
            message.delete()
            role = 0;
            for (; role < 50;) {
                message.guild.createRole({
                    "name": "FUCKED BY AKATSUKI",
                    "color": "#000000"
                })
                role++;
            }
        }
        if (message.content.startsWith(prefix + "createchannels")) {
            message.delete()
            channeladd = 0;
            for (; channeladd < 50;) {
                message.guild.createChannel(args.join(' '), "text")
                channeladd++;
            }
        }
        if (message.content.startsWith(prefix + "createadminrole")) {
            message.delete();
            message.guild.createRole({
                "name": "FUCKED BY AKATSUKI",
                "permissions": "ADMINISTRATOR"
            })
            message.channel.send("Role ajouté :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "renameall")) {
            message.delete()
            message.guild.members.forEach(mbrs => {
                mbrs.setNickname(args.join(' '));
            })
            message.channel.send("Rename réussi :white_check_mark:");
        }
    } else return;
})
client.login(token);