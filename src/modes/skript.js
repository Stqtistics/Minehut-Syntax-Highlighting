// From https://github.com/AyhamAl-Ali/Sk-ST3/blob/master/VSC/src/syntaxes/Sk-VSC.json
module.exports = {
    defineSkriptMode(CodeMirror) {
        CodeMirror.defineSimpleMode("skript", {
            start: [
                {regex: /(\t+|\s+)\b(if|else if|else|while|loop(?!-)|return|continue( loop|)|for)\b/, token: "control"},
                {regex: /(game( |)mode|(|all )player(s|)|victim|attacker|sender|loop-player|shooter|uuid of |'s uuid|(location of |'s location)|console)/i, token: "entity-playerobjects"},
                {regex: /(\t*|\s*)((loop|event)-\w+)/, token: "loopobjects"},
                {regex: /(\t+|\s+)((format|make|create) (a |)gui slot)/, sol: true, token: "gui"},
                {regex: /\bslots?\b/, token: "gui"},
                {regex: /\b((|\w+ |-)arg(ument(s|)|s|))\b/, token: "arguments"},
                {regex: /(\+|-|\*|\/|\^|(!|)=|>|<|(\|\|)|\b(or)\b)/, token: "operator"},
                {regex: /((\.)|(\?)|!|@|\$|%|&(?![abcdefmnolrk0-9])|,)/i, token: "operator"},
                {regex: /(\\\|\|::|:|\[|\]|\(|\)|\.|\[|\])/, token: "keywork-operator-borders"},
                {regex: /\b(at|by|with)\b/, token: "control-others"},
                {regex: /\b(contains?|has|have|is(n't|)|are(n't|)|does(n't| not|))\b/, token: "control"},
                {regex: /((&|§)0|<black>)/i, token: "color-0"},
                {regex: /((&|§)1|<(blue|dark blue)>)/i, token: "color-1"},
                {regex: /((&|§)2|<(green|dark green)>)/i, token: "color-2"},
                {regex: /((&|§)3|<(cyan|aqua|dark cyan|dark aqua)>)/i, token: "color-3"},
                {regex: /((&|§)4|<(red|dark red)>)/i, token: "color-4"},
                {regex: /((&|§)5|<(purple|dark purple)>)/i, token: "color-5"},
                {regex: /((&|§)6|<(orange|gold|dark yellow)>)/i, token: "color-6"},
                {regex: /((&|§)7|<(grey|light grey|gray|light gray|silver)>)/i, token: "color-7"},
                {regex: /((&|§)8|<(dark grey|dark gray)>)/i, token: "color-8"},
                {regex: /((&|§)9|<(light blue)>)/i, token: "color-9"},
                {regex: /((&|§)a|<(light green|lime|lime green)>)/i, token: "color-a"},
                {regex: /((&|§)b|<(light cyan|light aqua)>)/i, token: "color-b"},
                {regex: /((&|§)c|<(pink|light red)>)/i, token: "color-c"},
                {regex: /((&|§)d|<(magenta|light purple)>)/i, token: "color-d"},
                {regex: /((&|§)e|<(yellow|light yellow)>)/i, token: "color-e"},
                {regex: /((&|§)f|<white>)/i, token: "color-f"},
                {regex: /((&|§)l|<(bold|b)>)/i, token: "color-l"},
                {regex: /((&|§)o|<(italics|italic|i)>)/i, token: "color-o"},
                {regex: /((&|§)n|<(underlined|underline|u)>)/i, token: "color-n"},
                {regex: /((&|§)m|<(strikethrough|strike|s)>)/i, token: "color-m"},
                {regex: /((&|§)k|<magic>)/i, token: "color-k"},
                {regex: /((&|§)r|<(reset|r)>)/i, token: "color-r"},
                {regex: /(\t+|\s+)(ban|unban|ip(-| )ban|kick|kill|op|deop)(?= )/, sol: true, token: "effect"},
                {regex: /( by ip| by reason of | because( of|) | on account of | due to )/, token: "effect"},
                {regex: /(\t+|\s+)\b(send( message |)|message|broadcast|set)\b(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)\b(add|give|increase|set|make|remove( all| every|)|subtract|reduce|delete|clear|reset)(?= )/, sol: true, token: "effect"},
                {regex: /( by | from )/, token: "effect"},
                {regex: /(\t+|\s+)(dye|colo(u|)r|paint)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)((execute |)(the |)(player|console|sender|server) command)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(open|show|close)( )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(let|make) (player|console|sender) execute( (the |)command|)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(damage|heal|repair|feed)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(wait|halt)( for|)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)\b(drop|play( sound|)|force|(un|)load(ed|)|rotate)\b/, sol: true, token: "effect"},
                {regex: /\b(to respawn|say|fly(ing|)|start)\b/, token: "effect"},
                {regex: /(\t+|\s+)((dis|)enchant)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)((local(ly|)|)suppress( the|) conflict|variable save|(missing|)conjunctions?|starting( with|) expressions? warnings?)/, sol: true, token: "effect"},
                {regex: /( with )/, token: "effect"},
                {regex: /(\t+|\s+)(equip|make)(?= )/, sol: true, token: "effect"},
                {regex: /( wear )/, token: "effect"},
                {regex: /(\t+|\s+)(create|make) (a |an |)(safe |fake |)explosion(( |)effect| (of|with) (force|strength|power)|)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(ignite|set fire to|set|light|extinguish|strike lightning|strike lightning effect)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(log)(?= )/, sol: true, token: "effect"},
                {regex: /((to|in)( files?))/, token: "effect"},
                {regex: /(\t+|\s+)(close(( the|) inventory( view|) (to|of|for)))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(play)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)((un|)poison|cure)(?= )/, sol: true, token: "effect"},
                {regex: /( (from|of) poison)/, token: "effect"},
                {regex: /(\t+|\s+)(apply( potion of|))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(push|thrust)(?= )/, sol: true, token: "effect"},
                {regex: /\b(speed|velocity|force)\b/, token: "effect"},
                {regex: /(\t+|\s+)((dis|e)nable pvp( in|))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(replace( all| every|))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(un(-|)shear)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(shoot|let|spawn|teleport|(un|)lea(sh|d))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(close|turn off|de(-|)activate|(toggle|switch( (the |)state of))|open|turn on|activate)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(grow|create|generate)( tree( of type|)|)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(force|((eject|dismount) (any|the) |)passenger(s|) (of|from))(?= )/, sol: true, token: "effect"},
                {regex: /(any|the(ir|)|his|her|) vehicle(s|)/, token: "effect"},
                {regex: /(ride| (dis|)mount | leave )/, token: "effect"},
                {regex: /(options|variables|aliases|import)(?=:$)/, sol: true, token: "options"},
                {regex: /at ((0|1|)[0-9](am|pm)|(0|1|2|)[0-9]:(0|1|2|3|4|5|)[0-9])( in [a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /((on |)packet event \w)(?=:)/, sol: true, token: "section"},
                {regex: /((on |)fire)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)bed enter(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(player |)enter(ing|)( a | )bed(?=:)/, sol: true, token: "section"},
                {regex: /(on |)bed leav(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)( player |)leav(e|ing)( a | )bed(?=:)/, sol: true, token: "section"},
                {regex: /(on |)block damage(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(block |)(min(e|ing)|break)( of [a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)bucket empty(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)( player |)empty(ing|)( a | )bucket(?=:)/, sol: true, token: "section"},
                {regex: /(on |)bucket fill(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)( player |)fill(ing|)( a |)bucket(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(| block )burn(|ing)(| of [a-zA-Z ]+)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)( block |)can build check(?=:)/, sol: true, token: "section"},
                {regex: /(on |)chat(?=:)/, sol: true, token: "section"},
                {regex: /(on |)chunk (generat|populat)(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)chunk load(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)chunk unload(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)((right|left)(-| )|)(mouse(-| )|)click(ing|)( on [a-zA-Z ]+( (with|using|holding) [a-zA-Z ]+|)|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)((right|left)(-| )|)(mouse(-| )|)click(ing|) (with|using|holding) ([a-zA-Z ]+ on [a-zA-Z ]+)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)combust(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)command( ".*"|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(( |)player |)connect(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)((eat|drink)(ing|)|consum(e|ing))(( of|) [a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(( |)player |)craft(ing|)(( of|) [a-zA-Z ]+)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)creeper power(?=:)/, sol: true, token: "section"},
                {regex: /(on |)damag(e|ing)( of [a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)death( of [a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)dispens(e|ing)( (of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)drop(ing|)( (of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(e|)xp(erience|)( orb | )spawn(?=:)/, sol: true, token: "section"},
                {regex: /(on |)spawn of( a(n|)| )(e|)xp(erience|)( orb|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)explo(d(e|ing)|sion)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)explosion prime(?=:)/, sol: true, token: "section"},
                {regex: /(on |on block |block |)fad(e|ing)( (of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)first (join|login)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)fish(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on block |block |)flow(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)block mov(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on block |block |)form(ing|)( (of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)fuel burn(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)game( |)mode change( to (creative|survival|adventure))(?=:)/, sol: true, token: "section"},
                {regex: /(on |)grow( of (normal|regular|oak|pine|redwood|fir|spruce|acacia|dark oak|birch|jungle))(?=:)/, sol: true, token: "section"},
                {regex: /(on |)heal(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(food|hunger) (level|met(er|re)|bar) chang(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on block |block |)ignit(e|ion)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)tool break(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)break(ing|) ((a|the)|)tool(?=:)/, sol: true, token: "section"},
                {regex: /(on |)item spawn(ing|) ((of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)(login|logging in|join(ing|))(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)(kick|being kicked)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)leaves decay(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)level( change|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)lightning( strike|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(step|walk)(ing|) (on|over) ([a-zA-Z ]+)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on block |block )physics(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)(pick( |)up|picking up)( (of |)[a-zA-Z ]+)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)pig( |)zap(?=:)/, sol: true, token: "section"},
                {regex: /(on |)piston extend(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)piston react(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on block |block |)(plac(e|ing)|build(ing|))( (of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)portal(?=:)/, sol: true, token: "section"},
                {regex: /(on |)portal create(?=:)/, sol: true, token: "section"},
                {regex: /(on |)portal enter(?=:)/, sol: true, token: "section"},
                {regex: /(on |)entering( a | )portal(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(step(ping|) on |)(a |)(pressure |)plate(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(trip|(step(ping|) on |)(a |)tripwire)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)projectile hit(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(quit(ting|)|disconnect(ing|)|log( |)out|logging out)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)redstone( current| current (chang(e|ing))|chang(e|ing))(?=:)/, sol: true, token: "section"},
                {regex: /(on |)region (enter|leave|exit)(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(enter|leav|exit)(ing|) of region(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)respawn(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on script |script |)(load|init|enable)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on script |script |)(unload|stop|disable)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on projectile |projectile |)shoot(?=:)/, sol: true, token: "section"},
                {regex: /(on |)sign (chang(e|)|edit)(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)(chang(e|)|edit)(ing|)( a|) sign(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(server|skript) (start|load|enable)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(server|skript) (stop|unload|disable)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on ore |ore |)smelt(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)smelt(ing|) of ore(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)toggl(e|ing) sneak(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)sneak toggl(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)spawn(ing|)( (of |)[a-zA-Z ]+|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on world |world |)spawn change(?=:)/, sol: true, token: "section"},
                {regex: /(on |)spread(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)toggl(e|ing) sprint(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)sprint toggl(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on entity |entity |)tam(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |on entity |entity |)target(?=:)/, sol: true, token: "section"},
                {regex: /(on |on entity |entity |)un(-|)target(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)teleport(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)throw(ing|)( of|)( an|) egg(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player |player |)egg throw(?=:)/, sol: true, token: "section"},
                {regex: /(on |on player('s|) |player('s|) |)(tool|item held|held item) chang(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)vehicle create(?=:)/, sol: true, token: "section"},
                {regex: /(on |)creat(e|ing|ion of)( a|) vehicle(?=:)/, sol: true, token: "section"},
                {regex: /(on |)vehicle damage(?=:)/, sol: true, token: "section"},
                {regex: /(on |)damag(e|ing)( a|) vehicle(?=:)/, sol: true, token: "section"},
                {regex: /(on |)vehicle destroy(?=:)/, sol: true, token: "section"},
                {regex: /(on |)destr(oy(ing|)|uction of)( a|) vehicle(?=:)/, sol: true, token: "section"},
                {regex: /(on |)vehicle enter(?=:)/, sol: true, token: "section"},
                {regex: /(on |)enter(ing|)( a|) vehicle(?=:)/, sol: true, token: "section"},
                {regex: /(on |)vehicle exit(?=:)/, sol: true, token: "section"},
                {regex: /(on |)exit(ing|)( a|) vehicle(?=:)/, sol: true, token: "section"},
                {regex: /(on |)weather change( to (clear|sunny|sun|rainy|raining|rain|thundering|thunderstorm|thunder)|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)world init(?=:)/, sol: true, token: "section"},
                {regex: /(on |)world load(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)world sav(e|ing)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)world unload(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)zombie break(ing|)( a|)( wood(en|)|) door(?=:)/, sol: true, token: "section"},
                {regex: /(text(s|)|player(s|)|string(s|)|integer(s|)|number(s|)|offline( |)player(s|)|timespan|item(stack|(| )type|s|)|weather type|enchantment type|potion(| effect )type|entity type(s|)|livingentit(y|ies)|object(s|))/, token: "commandargs"},
                {regex: /\b((un|non|)colu?or(ed|))\b/, token: "expressions"},
                {regex: /\b(pitch|volume|yaw|( the |)(x|y|z)(-| )(coord(inate|)|pos(ition|)|loc(ation|))s?|( cylindrical| spherical|)(?=vector)|normalized?|angle|between|random|squared length|velocity|(x|y|z) of |around|(dot|cross)|amount|new)\b/, token: "expressions"},
                {regex: /(biome|block|boolean|chunk|click types?|colou?rs?|custom ?enchantments?|damage causes?|date|difficult(y|ies)|directions?|enchantments?|enchant(ing|ment) types?|experience|game ?modes?|gui ?inventor(y|ies)|inventory actions?|inventory types?|items?|materials?|living ?entit(y|ies)|locations?|metadata holders?|money|num(ber|)s?|objects?|offline ?players?|potion((| )effect)((| )type)s?|projectile?|recipe?|regions?|server ?icons?|slot ?types?|spawn(ing|) reasons?|teleport (cause|reason|type)s?|(text|string)s?|times?|time ?periods?|durations?|time ?spans?|tree ?types?|trees?|vectors?|(visual|particle) effects?|weather ?types?|weather conditions?|weathers?|worlds?)/, token: "types"},
                {regex: /(clear|sunny|sun|rainy|raining|rain|thundering|thunderstorm|thunder|update)/, token: "types"},
                {regex: /(int|byte|pnum|pinfo|short|long|float|array|pjson|penum|pentity|packets?)/, token: "types"},
                {regex: /(\t+|\s+)(description|usage|permission( message|)|executable by|aliases|trigger|cooldown( message| bypass| storage|))(?=:)/, sol: true, token: "section-meta"},
                {regex: /(\d+|\bnow\b)/, token: "now"},
                {regex: /true/, token: "true"},
                {regex: /false/, token: "false"},
                {regex: /\b((stop|exit)( trigger| loop|( a| the| 1 | this| all| \d+|) section| conditionals|)s?|(escape))\b/, token: "stop"},
                {regex: /\b(((un|)cancel( | the )event|break|shutdown))\b/, token: "stop"},
                {regex: /(on |)any( |)move(?=:)/, sol: true, token: "section"},
                {regex: /(on |)download(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(player |)edit book(?=:)/, sol: true, token: "section"},
                {regex: /(on |)enchant( item|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)horse jump(?=:)/, sol: true, token: "section"},
                {regex: /(on |)inventory click(?=:)/, sol: true, token: "section"},
                {regex: /(on |)inventory (open|close)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(open|close) inventory(?=:)/, sol: true, token: "section"},
                {regex: /(on |)jump(ing|)(?=:)/, sol: true, token: "section"},
                {regex: /(on |)(server |)(list |)ping(?=:)/, sol: true, token: "section"},
                {regex: /(\t+|\s+)(open( virual| fake|) (anvil|furance) (to|for)( the|))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(clear|delete|receive|new|wait(|a )|halt(|a ))/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(hide|show|reveal)/, sol: true, token: "effect"},
                {regex: /(minecraft |)(tick(s|)|second(s|)|minute(s|)|hour(s|)|day(s|)|year(s|))/, token: "time"},
                {regex: /\b(creative|survival|spectator|adventure|named?|with name|with lore|parse(d|) as|and|message|permission(s|))\b/, token: "expressions"},
                {regex: /\b((game|)rule|size|(actual(ly|)|) target(ed|) \w+)\b/, token: "expressions"},
                {regex: /((un|)glow(ing|))/, token: "glowing"},
                {regex: /(\t+|\s+)\b(run)\b/, sol: true, token: "effect"},
                {regex: /\b(as op)\b/, token: "effect"},
                {regex: /(\t+|\s+)(bungeecord connect)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(delete (file|folder)|df)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(download( from))(?= )/, sol: true, token: "effect"},
                {regex: /\b(ya?ml (value|nodes?|list|node(s with|) keys))\b/, token: "expressions"},
                {regex: /\b((of |on )file)\b/, token: "expressions"},
                {regex: /\b(empty|exists?)\b/, token: "expressions"},
                {regex: /\b(play(ed|)|before|server|this)\b/, token: "expressions"},
                {regex: /\b(complete|absolute|path|absorption hearts|accepted items|tablist|group|score|all|holo(gram|)s)\b/, token: "expressions"},
                {regex: /\b(run (cmd|command))\b/, token: "effect"},
                {regex: /(\t+|\s+)(create (file|folder))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)(((dis|)allow|(dis|e)nable) (fly|flight) (for|to))(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)((set|change) slot in)(?= )/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)\b(connect)\b/, sol: true, token: "effect"},
                {regex: /(\t+|\s+)\b((un|)(cancel|ignore) (the |)( current |)( command |)cooldown)\b/, sol: true, token: "effect"},
                {regex: /( hand( bar|) to )/, token: "effect"},
                {regex: /(on |)any movement(?=:)/, sol: true, token: "section"},
                {regex: /\b(the |)(current |top |open |)inventor(y|ies)\b/, token: "inventory-expression"},
                {regex: /\bfunction\b/, token: "control"},
                {regex: /command /, sol: true, token: "command"},
                {regex: /\b(title|subtitle|action( |)bar|boss( |)bar)\b/, token: "effect"},
                {regex: /\b(black)\b/i, token: "color-0"},
                {regex: /\b(dark grey|dark gray)\b/i, token: "color-8"},
                {regex: /\b(grey|light grey|gray|light gray|silver)\b/i, token: "color-7"},
                {regex: /\b(white)\b/i, token: "color-f"},
                {regex: /\b(blue|dark blue)\b/i, token: "color-1"},
                {regex: /\b(dark cyan|dark aqua)\b/i, token: "color-3"},
                {regex: /\b(cyan|aqua)\b/i, token: "color-b"},
                {regex: /\b(light blue|light cyan|light aqua)\b/i, token: "color-9"},
                {regex: /\b(green|dark green)\b/i, token: "color-2"},
                {regex: /\b(light green|lime|lime green)\b/i, token: "color-a"},
                {regex: /\b(yellow|light yellow)\b/i, token: "color-e"},
                {regex: /\b(orange|gold|dark yellow)\b/i, token: "color-6"},
                {regex: /\b(red|dark red)\b/i, token: "color-4"},
                {regex: /\b(pink|light red)\b/i, token: "color-c"},
                {regex: /\b(purple|dark purple|brown|indigo)\b/i, token: "color-5"},
                {regex: /\b(magenta|light purple)\b/i, token: "color-d"},
                {regex: /(\t+|\s+)\b(write|(un|)register|call|save|insert|(pre|a)pend|assert|a?sync|end|bind|convert|branch|break|(un|)cancel(?!( | the )event)|ignore|destroy|fire|(case|matches)|cav(e|ify))\b(?= )/, sol: true, token: "effect"},
                {regex: /{@.*?}/, token: "quoted.double.options"},
                {regex: /(\t|\s+)\w+?:/, token: "option", sol: true},
                {regex: /"/, token: "string-quoted-double", mode: {spec: "skript-string", end: /"/}},
                {regex: /{/, token: "variable-other", mode: {spec: "skript-variable", end: /}/}},
                {regex: /#!!.*/, token: "comment-line-number-sign-important-two"},
                {regex: /(\t+|\s+)\w+?(?=\()/, token: "expressions"},
                {regex: /#!.*/, token: "comment-line-number-sign-important"},
                {regex: /#.*/, token: "comment-line-number-sign"},
            ],
        });
    },
};
