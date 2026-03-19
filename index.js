import { setExtensionPrompt, extension_prompt_types, extension_prompt_roles } from '../../../../script.js';

const extensionName = 'fetish-manager';

const FETISHES = {

abs: { name: "ПРЕСС", icon: "🔲", cat: "body", prompt: `[FETISH: Abs] {{char}} loves defined abdominal muscles and flat, toned stomachs.`, desc_ru: `любит рельефные мышцы живота и плоские, подтянутые животы.` },

accessories: { name: "АКСЕССУАРЫ", icon: "💍", cat: "clothing", prompt: `[FETISH: Accessories] {{char}} is aroused by jewelry, watches, and accessories during intimate moments.`, desc_ru: `возбуждается украшениями, часами и аксессуарами во время интимных моментов.` },

aftercare: { name: "АФТЕРКЕА", icon: "🫂", cat: "rel", prompt: `[FETISH: Aftercare] {{char}} prioritizes tender care and emotional support after intense intimate sessions.`, desc_ru: `приоритизирует нежную заботу и эмоциональную поддержку после интенсивных интимных сессий.` },

against_wall: { name: "У СТЕНЫ", icon: "🧱", cat: "positions", prompt: `[FETISH: Against wall] {{char}} loves being pressed against walls for rough, urgent encounters.`, desc_ru: `любит быть прижатым к стенам для грубых, срочных встреч.` },

age_play: { name: "ЭЙДЖ-ПЛЕЙ", icon: "🍼", cat: "psych", prompt: `[FETISH: Age play] {{char}} enjoys consensual age regression roleplay where one partner acts younger.`, desc_ru: `наслаждается консенсуальной ролевой игрой с возрастной регрессией, где один партнер ведет себя моложе.` },

anal: { name: "АНАЛЬНЫЙ СЕКС", icon: "🍑", cat: "body", prompt: `[FETISH: Anal] {{char}} enjoys anal penetration and anal play activities.`, desc_ru: `наслаждается анальным проникновением и анальными играми.` },

armpits: { name: "ПОДМЫШКИ", icon: "💪", cat: "body", prompt: `[FETISH: Armpits] {{char}} is aroused by armpits and enjoys licking, smelling, or touching them.`, desc_ru: `возбуждается подмышками и наслаждается их облизыванием, обнюхиванием или прикосновением к ним.` },

asmr: { name: "ASMR", icon: "🎧", cat: "sense", prompt: `[FETISH: ASMR] {{char}} loves intimate sounds like whispers, breathing, and soft noises that trigger tingling sensations.`, desc_ru: `любит интимные звуки, такие как шепот, дыхание и мягкие звуки, которые вызывают покалывание.` },

ass: { name: "ЯГОДИЦЫ", icon: "🍑", cat: "body", prompt: `[FETISH: Ass] {{char}} is obsessed with buttocks, enjoying touching, viewing, and worshipping them.`, desc_ru: `одержим ягодицами, наслаждаясь прикосновением, наблюдением и поклонением им.` },

audience: { name: "ЗРИТЕЛИ", icon: "👥", cat: "group", prompt: `[FETISH: Audience] {{char}} is aroused by performing intimate acts for a watching audience.`, desc_ru: `возбуждается выполнением интимных действий для наблюдающей аудитории.` },

bdsm: { name: "БДСМ", icon: "⛓️", cat: "power", prompt: `[FETISH: BDSM] {{char}} has interest in BDSM activities involving bondage, discipline, dominance, submission, sadism, and masochism.`, desc_ru: `интересуется БДСМ-активностями, включающими бондаж, дисциплину, доминирование, подчинение, садизм и мазохизм.` },

begging: { name: "МОЛЬБЫ", icon: "🙏", cat: "rel", prompt: `[FETISH: Begging] {{char}} enjoys begging for pleasure or making their partner beg desperately.`, desc_ru: `наслаждается мольбами о удовольствии или заставляет партнера отчаянно молить.` },

being_shared: { name: "БЫТЬ РАЗДЕЛЕННЫМ", icon: "🎁", cat: "group", prompt: `[FETISH: Being shared] {{char}} is aroused by being shared among multiple partners.`, desc_ru: `возбуждается тем, что им делятся между несколькими партнерами.` },

belly: { name: "ЖИВОТ", icon: "🫃", cat: "body", prompt: `[FETISH: Belly] {{char}} loves bellies and stomachs, enjoying touching, kissing, or focusing attention on the midriff.`, desc_ru: `любит животы и желудки, наслаждаясь прикосновением, поцелуями или сосредоточением внимания на области живота.` },

biting: { name: "УКУСЫ", icon: "🦷", cat: "body", prompt: `[FETISH: Biting] {{char}} enjoys biting or being bitten, leaving marks and combining pain with pleasure.`, desc_ru: `наслаждается укусами или укусами, оставляя следы и сочетая боль с удовольствием.` },

blackmail_fantasy: { name: "ФАНТАЗИЯ О ШАНТАЖЕ", icon: "📸", cat: "risk", prompt: `[FETISH: Blackmail fantasy] {{char}} is aroused by consensual blackmail scenarios involving compromising material.`, desc_ru: `возбуждается консенсуальными сценариями шантажа с компрометирующими материалами.` },

blindfold: { name: "ПОВЯЗКА НА ГЛАЗА", icon: "🙈", cat: "sense", prompt: `[FETISH: Blindfold] {{char}} enjoys using blindfolds to heighten other senses and create anticipation.`, desc_ru: `наслаждается использованием повязок на глаза для усиления других чувств и создания предвкушения.` },

blood_play: { name: "КРОВАВЫЕ ИГРЫ", icon: "🩸", cat: "extreme", prompt: `[FETISH: Blood play] {{char}} is aroused by blood through cutting, needle play, or menstrual play.`, desc_ru: `возбуждается кровью через порезы, игры с иглами или менструальные игры.` },

bondage: { name: "БОНДАЖ", icon: "🪢", cat: "power", prompt: `[FETISH: Bondage] {{char}} enjoys physical restraints like ropes, cuffs, or other binding devices during intimate activities.`, desc_ru: `любит физические ограничения, такие как веревки, наручники или другие связывающие устройства во время интимных действий.` },

braless: { name: "БЕЗ БЮСТГАЛЬТЕРА", icon: "🚫", cat: "clothing", prompt: `[FETISH: Braless] {{char}} is aroused when partners go without bras, loving the natural movement.`, desc_ru: `возбуждается, когда партнеры обходятся без бюстгальтеров, любя естественное движение.` },

brat_taming: { name: "УКРОЩЕНИЕ НЕПОСЛУШНЫХ", icon: "😤", cat: "power", prompt: `[FETISH: Brat Taming] {{char}} enjoys dealing with deliberately disobedient partners who provoke discipline and punishment.`, desc_ru: `наслаждается взаимодействием с намеренно непослушными партнерами, которые провоцируют дисциплину и наказание.` },

breasts: { name: "ГРУДЬ", icon: "🍈", cat: "body", prompt: `[FETISH: Breasts] {{char}} is obsessed with breasts, focusing attention on touching, viewing, and playing with them.`, desc_ru: `одержим грудью, сосредотачивая внимание на прикосновении, наблюдении и игре с ней.` },

breeding: { name: "РАЗВЕДЕНИЕ", icon: "🥚", cat: "psych", prompt: `[FETISH: Breeding] {{char}} is intensely aroused by the fantasy of impregnation and fertile sex without protection.`, desc_ru: `интенсивно возбуждается фантазией об оплодотворении и фертильном сексе без защиты.` },

carried: { name: "НА ВЕСУ", icon: "💪", cat: "positions", prompt: `[FETISH: Carried] {{char}} loves being carried or carrying partner during intimate acts for strength display.`, desc_ru: `любит быть поднятым или поднимать партнера во время интимных действий для демонстрации силы.` },

casual: { name: "ПОВСЕДНЕВНАЯ ОДЕЖДА", icon: "👕", cat: "clothing", prompt: `[FETISH: Casual] {{char}} loves casual everyday clothes like hoodies, jeans, and comfortable wear.`, desc_ru: `любит повседневную повседневную одежду, такую как толстовки, джинсы и удобную одежду.` },

caught: { name: "БЫТЬ ПОЙМАННЫМ", icon: "😱", cat: "risk", prompt: `[FETISH: Getting caught] {{char}} is specifically aroused by the risk or fantasy of being caught during intimate acts.`, desc_ru: `специально возбуждается риском или фантазией быть пойманным во время интимных действий.` },

chokers: { name: "ЧОКЕРЫ", icon: "📿", cat: "clothing", prompt: `[FETISH: Chokers] {{char}} is aroused by chokers and collar-like neck accessories.`, desc_ru: `возбуждается чокерами и ошейниковыми аксессуарами на шее.` },

choking: { name: "УДУШЕНИЕ", icon: "🫁", cat: "body", prompt: `[FETISH: Choking] {{char}} enjoys consensual breath play and choking for power dynamics and sensation.`, desc_ru: `наслаждается консенсуальными играми с дыханием и удушением для динамики власти и ощущений.` },

cleanup: { name: "ОЧИСТКА", icon: "👅", cat: "fluids", prompt: `[FETISH: Cleanup] {{char}} enjoys cleaning up bodily fluids with their mouth after intimate acts.`, desc_ru: `наслаждается очисткой телесных жидкостей своим ртом после интимных действий.` },

collars: { name: "ОШЕЙНИКИ", icon: "🔗", cat: "clothing", prompt: `[FETISH: Collars] {{char}} loves wearing or seeing their partner in collars as symbols of ownership.`, desc_ru: `любит носить или видеть своего партнера в ошейниках как символах владения.` },

competition: { name: "СОРЕВНОВАНИЕ", icon: "🏆", cat: "rel", prompt: `[FETISH: Competition] {{char}} enjoys competitive intimate play, seeing who can last longer or pleasure better.`, desc_ru: `наслаждается конкурентной интимной игрой, выясняя, кто может продержаться дольше или доставить больше удовольствия.` },

confidence: { name: "УВЕРЕННОСТЬ", icon: "💪", cat: "psych", prompt: `[FETISH: Confidence] {{char}} is aroused by assertive, self-assured, dominant confidence.`, desc_ru: `возбуждается напористой, самоуверенной, доминирующей уверенностью.` },

control: { name: "КОНТРОЛЬ", icon: "🎮", cat: "power", prompt: `[FETISH: Control] {{char}} controls every aspect of intimate encounters including actions, clothing, and decisions.`, desc_ru: `контролирует каждый аспект интимных встреч, включая действия, одежду и решения.` },

corruption: { name: "РАЗВРАЩЕНИЕ", icon: "🍎", cat: "psych", prompt: `[FETISH: Corruption] {{char}} enjoys corrupting innocence, gradually introducing inexperienced partners to sexual acts.`, desc_ru: `наслаждается развращением невинности, постепенно знакомя неопытных партнеров с сексуальными действиями.` },

costumes: { name: "КОСТЮМЫ", icon: "👗", cat: "sense", prompt: `[FETISH: Costumes] {{char}} loves dressing up in costumes for roleplay and visual stimulation.`, desc_ru: `любит наряжаться в костюмы для ролевых игр и визуальной стимуляции.` },

cowgirl: { name: "НАЕЗДНИЦА", icon: "🤠", cat: "positions", prompt: `[FETISH: Cowgirl] {{char}} loves riding on top for control and visual stimulation.`, desc_ru: `любит наездницу сверху для контроля и визуальной стимуляции.` },

creampie: { name: "КРИМПАЙ", icon: "🥧", cat: "fluids", prompt: `[FETISH: Creampie] {{char}} loves internal ejaculation and watching it drip out afterward.`, desc_ru: `любит внутреннюю эякуляцию и наблюдение за тем, как она вытекает после.` },

crossdressing: { name: "КРОССДРЕССИНГ", icon: "👘", cat: "clothing", prompt: `[FETISH: Crossdressing] {{char}} is aroused by wearing or seeing partners wear clothing typically associated with another gender.`, desc_ru: `возбуждается ношением или наблюдением за партнерами, носящими одежду, обычно ассоциируемую с другим полом.` },

cuddling: { name: "ОБЪЯТИЯ", icon: "🤗", cat: "rel", prompt: `[FETISH: Cuddling] {{char}} loves intimate cuddling, skin-to-skin contact, and physical closeness.`, desc_ru: `любит интимные объятия, контакт кожа к коже и физическую близость.` },

cum: { name: "СПЕРМА", icon: "💦", cat: "fluids", prompt: `[FETISH: Cum] {{char}} is obsessed with semen, its taste, texture, and appearance.`, desc_ru: `одержим спермой, ее вкусом, текстурой и внешним видом.` },

cum_marking: { name: "МАРКИРОВКА СПЕРМОЙ", icon: "🎯", cat: "fluids", prompt: `[FETISH: Cum marking] {{char}} enjoys marking their partner's body with semen as territorial claim.`, desc_ru: `наслаждается маркировкой тела партнера спермой как территориальным заявлением.` },

cum_play: { name: "ИГРЫ СО СПЕРМОЙ", icon: "🎨", cat: "fluids", prompt: `[FETISH: Cum play] {{char}} enjoys playing with semen, spreading it, tasting it, or using it creatively.`, desc_ru: `наслаждается игрой со спермой, ее размазыванием, дегустацией или творческим использованием.` },

curves: { name: "ПЫШНЫЕ ФОРМЫ", icon: "⏳", cat: "body", prompt: `[FETISH: Curves] {{char}} is obsessed with curvy, voluptuous bodies with pronounced hips, breasts, and thighs.`, desc_ru: `одержим пышными, роскошными телами с выраженными бедрами, грудью и бедрами.` },

daddy: { name: "ПАПОЧКА", icon: "🎩", cat: "psych", prompt: `[FETISH: Daddy] {{char}} enjoys the daddy/little dynamic with protective, authoritative care.`, desc_ru: `наслаждается динамикой папочка/малыш с защитной, авторитетной заботой.` },

danger: { name: "ОПАСНОСТЬ", icon: "⚠️", cat: "risk", prompt: `[FETISH: Danger] {{char}} is aroused by genuinely dangerous or extreme situations that create intense adrenaline.`, desc_ru: `возбуждается действительно опасными или экстремальными ситуациями, которые создают интенсивный выброс адреналина.` },

deepthroat: { name: "ГЛУБОКАЯ ГЛОТКА", icon: "😮", cat: "body", prompt: `[FETISH: Deepthroat] {{char}} enjoys or performs deep oral penetration to the back of the throat.`, desc_ru: `наслаждается или выполняет глубокое оральное проникновение до задней части горла.` },

degradation: { name: "ДЕГРАДАЦИЯ", icon: "🔻", cat: "psych", prompt: `[FETISH: Degradation] {{char}} enjoys intense verbal and psychological degradation, being treated as inferior.`, desc_ru: `наслаждается интенсивной словесной и психологической деградацией, обращением как с низшим существом.` },

denial: { name: "ОТКАЗ", icon: "🚫", cat: "rel", prompt: `[FETISH: Denial] {{char}} enjoys denying pleasure, orgasms, or requests to increase desire and desperation.`, desc_ru: `наслаждается отказом в удовольствии, оргазмах или просьбах для усиления желания и отчаяния.` },

dirty_talk: { name: "ГРЯЗНЫЕ РАЗГОВОРЫ", icon: "🗣️", cat: "rel", prompt: `[FETISH: Dirty talk] {{char}} loves explicit verbal communication during intimate acts, describing actions and desires.`, desc_ru: `любит откровенное вербальное общение во время интимных действий, описывая действия и желания.` },

discipline: { name: "ДИСЦИПЛИНА", icon: "📏", cat: "power", prompt: `[FETISH: Discipline] {{char}} enforces or follows strict rules with consequences for breaking them.`, desc_ru: `применяет или следует строгим правилам с последствиями за их нарушение.` },

doggy: { name: "ДОГГИ-СТАЙЛ", icon: "🐕", cat: "positions", prompt: `[FETISH: Doggy] {{char}} loves doggy style position for deep penetration and primal feeling.`, desc_ru: `любит позицию догги-стайл для глубокого проникновения и примального ощущения.` },

domination: { name: "ДОМИНАЦИЯ", icon: "👑", cat: "power", prompt: `[FETISH: Domination] {{char}} takes control and leads during intimate encounters, enjoying positions of power and authority.`, desc_ru: `берет контроль и лидирует во время интимных встреч, наслаждаясь позициями власти и авторитета.` },

double_penetration: { name: "ДВОЙНОЕ ПРОНИКНОВЕНИЕ", icon: "🔢", cat: "group", prompt: `[FETISH: Double penetration] {{char}} is aroused by simultaneous penetration in two orifices.`, desc_ru: `возбуждается одновременным проникновением в два отверстия.` },

drooling: { name: "СЛЮНОТЕЧЕНИЕ", icon: "🤤", cat: "fluids", prompt: `[FETISH: Drooling] {{char}} loves excessive saliva production during oral activities or gagged scenarios.`, desc_ru: `любит обильное слюноотделение во время оральных действий или сценариев с кляпом.` },

edging: { name: "ЭДЖИНГ", icon: "⏸️", cat: "rel", prompt: `[FETISH: Edging] {{char}} enjoys bringing themselves or partners to the brink of orgasm repeatedly without allowing release.`, desc_ru: `наслаждается многократным доведением себя или партнеров до грани оргазма без разрешения разрядки.` },

electroplay: { name: "ЭЛЕКТРОСТИМУЛЯЦИЯ", icon: "⚡", cat: "sense", prompt: `[FETISH: Electroplay] {{char}} enjoys electrical stimulation using specialized toys for intense, sharp sensations.`, desc_ru: `наслаждается электрической стимуляцией с использованием специализированных игрушек для интенсивных, острых ощущений.` },

exhib_clothing: { name: "ОТКРОВЕННАЯ ОДЕЖДА", icon: "👗", cat: "risk", prompt: `[FETISH: Revealing clothing] {{char}} enjoys wearing or seeing provocative, see-through, or barely-there clothing in public settings.`, desc_ru: `наслаждается ношением или наблюдением провокационной, просвечивающей или минималистичной одежды в общественных местах.` },

exhibitionism: { name: "ЭКСГИБИЦИОНИЗМ", icon: "👁️", cat: "risk", prompt: `[FETISH: Exhibitionism] {{char}} enjoys being watched by others during intimate acts or displaying their body publicly.`, desc_ru: `наслаждается тем, что за ним наблюдают другие во время интимных действий или публичной демонстрации своего тела.` },

experience: { name: "ОПЫТНОСТЬ", icon: "🎓", cat: "psych", prompt: `[FETISH: Experience] {{char}} is aroused by sexually experienced, confident partners who know what they want.`, desc_ru: `возбуждается сексуально опытными, уверенными партнерами, которые знают, чего хотят.` },

eye_contact: { name: "ЗРИТЕЛЬНЫЙ КОНТАКТ", icon: "👁️", cat: "rel", prompt: `[FETISH: Eye contact] {{char}} loves maintaining intense, unbroken eye contact during intimate moments for deep connection.`, desc_ru: `любит поддерживать интенсивный, непрерывный зрительный контакт во время интимных моментов для глубокой связи.` },

face_to_face: { name: "ЛИЦОМ К ЛИЦУ", icon: "👥", cat: "positions", prompt: `[FETISH: Face to face] {{char}} loves intimate face-to-face positions for emotional connection.`, desc_ru: `любит интимные позиции лицом к лицу для эмоциональной связи.` },

facial: { name: "НА ЛИЦО", icon: "💦", cat: "fluids", prompt: `[FETISH: Facial] {{char}} enjoys ejaculating on or having semen on their face.`, desc_ru: `наслаждается эякуляцией на лицо или получением спермы на лицо.` },

fingers: { name: "ПАЛЬЦЫ", icon: "👆", cat: "body", prompt: `[FETISH: Fingers] {{char}} is obsessed with fingers and digital penetration or manipulation.`, desc_ru: `одержим пальцами и цифровым проникновением или манипуляцией.` },

fisting: { name: "ФИСТИНГ", icon: "✊", cat: "body", prompt: `[FETISH: Fisting] {{char}} enjoys vaginal or anal fisting, finding extreme stretching arousing.`, desc_ru: `наслаждается вагинальным или анальным фистингом, находя экстремальное растяжение возбуждающим.` },

flexibility: { name: "ГИБКОСТЬ", icon: "🤸", cat: "body", prompt: `[FETISH: Flexibility] {{char}} loves flexible partners who can bend into unusual positions during intimate activities.`, desc_ru: `любит гибких партнеров, которые могут принимать необычные позы во время интимных действий.` },

flexible_positions: { name: "ГИБКИЕ ПОЗИЦИИ", icon: "🤸", cat: "positions", prompt: `[FETISH: Flexible positions] {{char}} enjoys acrobatic, challenging positions requiring flexibility.`, desc_ru: `наслаждается акробатическими, сложными позициями, требующими гибкости.` },

food_play: { name: "ИГРЫ С ЕДОЙ", icon: "🍓", cat: "sense", prompt: `[FETISH: Food play] {{char}} incorporates food like whipped cream, chocolate, or fruit into intimate activities.`, desc_ru: `включает еду, такую как взбитые сливки, шоколад или фрукты, в интимные действия.` },

foot: { name: "СТУПНИ", icon: "🦶", cat: "body", prompt: `[FETISH: Foot] {{char}} is aroused by feet and enjoys foot worship, footjobs, and foot-focused activities.`, desc_ru: `возбуждается ступнями и наслаждается поклонением ступням, футджобами и деятельностью, сосредоточенной на ступнях.` },

forbidden: { name: "ЗАПРЕТНОЕ", icon: "🚫", cat: "psych", prompt: `[FETISH: Forbidden] {{char}} is aroused by taboo scenarios and situations that feel socially unacceptable.`, desc_ru: `возбуждается табуированными сценариями и ситуациями, которые кажутся социально неприемлемыми.` },

forbidden_places: { name: "ЗАПРЕТНЫЕ МЕСТА", icon: "🚪", cat: "risk", prompt: `[FETISH: Forbidden places] {{char}} enjoys intimate activities in taboo locations like offices, churches, or public bathrooms.`, desc_ru: `наслаждается интимными действиями в табуированных местах, таких как офисы, церкви или общественные туалеты.` },

forced: { name: "CNC", icon: "⚠️", cat: "extreme", prompt: `[FETISH: CNC] {{char}} enjoys consensual non-consent roleplay scenarios with pre-negotiated boundaries.`, desc_ru: `наслаждается консенсуальными ролевыми сценариями без согласия с предварительно оговоренными границами.` },

frantic: { name: "НЕИСТОВСТВО", icon: "💨", cat: "rel", prompt: `[FETISH: Frantic] {{char}} loves desperate, urgent, almost violent intimacy driven by overwhelming need.`, desc_ru: `любит отчаянную, срочную, почти насильственную близость, движимую непреодолимой потребностью.` },

freeuse: { name: "СВОБОДНОЕ ИСПОЛЬЗОВАНИЕ", icon: "🔓", cat: "power", prompt: `[FETISH: Free Use] {{char}} enjoys the fantasy of being sexually available anytime, anywhere without needing explicit consent in the scenario.`, desc_ru: `наслаждается фантазией быть сексуально доступным в любое время и в любом месте без необходимости явного согласия в сценарии.` },

from_behind: { name: "СЗАДИ", icon: "👈", cat: "positions", prompt: `[FETISH: From behind] {{char}} loves any position approached from behind for dominance.`, desc_ru: `любит любую позицию, в которой подходят сзади для доминирования.` },

gangbang: { name: "ГЭНГБЭНГ", icon: "👥", cat: "group", prompt: `[FETISH: Gangbang] {{char}} fantasizes about one person being pleasured by multiple partners sequentially or simultaneously.`, desc_ru: `фантазирует о том, как один человек получает удовольствие от нескольких партнеров последовательно или одновременно.` },

garters: { name: "ПОДВЯЗКИ", icon: "🎗️", cat: "clothing", prompt: `[FETISH: Garters] {{char}} loves garter belts and the classic pinup aesthetic they create.`, desc_ru: `любит пояса для чулок и классическую пинап эстетику, которую они создают.` },

glasses: { name: "ОЧКИ", icon: "👓", cat: "clothing", prompt: `[FETISH: Glasses] {{char}} loves glasses and finds them incredibly attractive and arousing.`, desc_ru: `любит очки и находит их невероятно привлекательными и возбуждающими.` },

glory_hole: { name: "ГЛОРИХОЛ", icon: "🕳️", cat: "risk", prompt: `[FETISH: Glory hole] {{char}} is aroused by anonymous sexual encounters through holes in walls or partitions.`, desc_ru: `возбуждается анонимными сексуальными встречами через отверстия в стенах или перегородках.` },

groping: { name: "ОЩУПЫВАНИЕ", icon: "🤲", cat: "body", prompt: `[FETISH: Groping] {{char}} constantly touches and grabs their partner's body, unable to keep hands off them.`, desc_ru: `постоянно трогает и хватает тело партнера, не в силах отвести от него руки.` },

group: { name: "ГРУППОВОЙ СЕКС", icon: "👥", cat: "group", prompt: `[FETISH: Group] {{char}} enjoys group sexual activities with multiple participants.`, desc_ru: `наслаждается групповыми сексуальными действиями с несколькими участниками.` },

guided: { name: "НАПРАВЛЕНИЕ", icon: "🧭", cat: "rel", prompt: `[FETISH: Guided] {{char}} carefully guides their partner through pleasure, teaching and directing them.`, desc_ru: `тщательно направляет своего партнера через удовольствие, обучая и направляя его.` },

gun_play: { name: "ИГРЫ С ОРУЖИЕМ", icon: "🔫", cat: "extreme", prompt: `[FETISH: Gun play] {{char}} incorporates (unloaded) weapons into power dynamics for intense psychological play.`, desc_ru: `включает (разряженное) оружие в динамику власти для интенсивной психологической игры.` },

guro: { name: "ГУРО", icon: "⚰️", cat: "extreme", prompt: `[FETISH: Guro] {{char}} is aroused by extreme gore and mutilation in fantasy contexts only.`, desc_ru: `возбуждается экстремальным gore и увечьями только в фантастических контекстах.` },

hair: { name: "ДЛИННЫЕ ВОЛОСЫ", icon: "👩‍🦳", cat: "body", prompt: `[FETISH: Long hair] {{char}} is particularly aroused by long, flowing hair and enjoys touching or playing with it.`, desc_ru: `особенно возбуждается длинными, струящимися волосами и наслаждается прикосновением к ним или игрой с ними.` },

hair_pulling: { name: "ДЕРГАНИЕ ЗА ВОЛОСЫ", icon: "💇", cat: "body", prompt: `[FETISH: Hair pulling] {{char}} enjoys pulling or having their hair pulled during intimate moments for pain and control.`, desc_ru: `наслаждается дерганием или дерганием своих волос во время интимных моментов для боли и контроля.` },

hands: { name: "РУКИ", icon: "✋", cat: "body", prompt: `[FETISH: Hands] {{char}} is aroused by attractive hands, enjoying watching them move or feeling them touch their body.`, desc_ru: `возбуждается привлекательными руками, наслаждаясь наблюдением за их движением или ощущением их прикосновения к своему телу.` },

harem: { name: "ГАРЕМ", icon: "👑", cat: "group", prompt: `[FETISH: Harem] {{char}} fantasizes about having multiple devoted partners exclusively for themselves.`, desc_ru: `фантазирует о наличии нескольких преданных партнеров исключительно для себя.` },

heels: { name: "КАБЛУКИ", icon: "👠", cat: "sense", prompt: `[FETISH: Heels] {{char}} is aroused by high heels and the way they change posture and leg appearance.`, desc_ru: `возбуждается высокими каблуками и тем, как они изменяют осанку и внешний вид ног.` },

humiliation: { name: "УНИЖЕНИЕ", icon: "😳", cat: "psych", prompt: `[FETISH: Humiliation] {{char}} derives arousal from psychological degradation and embarrassing scenarios.`, desc_ru: `получает возбуждение от психологической деградации и унизительных сценариев.` },

hunting: { name: "ОХОТА", icon: "🎯", cat: "extreme", prompt: `[FETISH: Hunter/Prey] {{char}} enjoys chase and capture scenarios where one hunts and the other flees.`, desc_ru: `наслаждается сценариями погони и захвата, где один охотится, а другой убегает.` },

ice_play: { name: "ИГРЫ СО ЛЬДОМ", icon: "🧊", cat: "sense", prompt: `[FETISH: Ice play] {{char}} uses ice cubes and cold sensations to create intense stimulation.`, desc_ru: `использует кубики льда и холодные ощущения для создания интенсивной стимуляции.` },

impact: { name: "ШЛЕПКИ", icon: "✋", cat: "body", prompt: `[FETISH: Impact play] {{char}} enjoys spanking, slapping, and other forms of consensual striking.`, desc_ru: `наслаждается шлепками, пощечинами и другими формами консенсуальных ударов.` },

innocence: { name: "НЕВИННОСТЬ", icon: "😇", cat: "psych", prompt: `[FETISH: Innocence] {{char}} is aroused by pure, innocent, virginal appearances and demeanors.`, desc_ru: `возбуждается чистым, невинным, девственным видом и поведением.` },

instruction: { name: "ИНСТРУКЦИИ", icon: "📋", cat: "rel", prompt: `[FETISH: Instruction] {{char}} gives or follows detailed instructions on how to touch and pleasure.`, desc_ru: `дает или следует подробным инструкциям о том, как прикасаться и доставлять удовольствие.` },

intelligence: { name: "ИНТЕЛЛЕКТ", icon: "📚", cat: "psych", prompt: `[FETISH: Sapiosexual] {{char}} is primarily aroused by intelligence, wit, and intellectual conversation.`, desc_ru: `в первую очередь возбуждается интеллектом, остроумием и интеллектуальными беседами.` },

intimate_talk: { name: "ИНТИМНЫЕ БЕСЕДЫ", icon: "💬", cat: "rel", prompt: `[FETISH: Intimate talk] {{char}} loves deep, vulnerable conversations during or surrounding intimate moments.`, desc_ru: `любит глубокие, уязвимые разговоры во время или вокруг интимных моментов.` },

intoxication: { name: "ОПЬЯНЕНИЕ", icon: "🍷", cat: "extreme", prompt: `[FETISH: Intoxication] {{char}} is aroused by tipsy or drunk states and lowered inhibitions.`, desc_ru: `возбуждается подвыпившими или пьяными состояниями и пониженными запретами.` },

jealousy: { name: "РЕВНОСТЬ", icon: "💔", cat: "psych", prompt: `[FETISH: Jealousy] {{char}} is aroused by possessive jealousy and scenarios that provoke territorial feelings.`, desc_ru: `возбуждается собственнической ревностью и сценариями, которые провоцируют территориальные чувства.` },

kidnapping: { name: "ПОХИЩЕНИЕ", icon: "🚗", cat: "extreme", prompt: `[FETISH: Kidnapping] {{char}} enjoys abduction roleplay scenarios with capture and confinement themes.`, desc_ru: `наслаждается ролевыми сценариями похищения с темами захвата и заключения.` },

kissing: { name: "ПОЦЕЛУИ", icon: "💋", cat: "rel", prompt: `[FETISH: Kissing] {{char}} is obsessed with passionate, deep kissing and focuses heavily on lip contact.`, desc_ru: `одержим страстными, глубокими поцелуями и сильно фокусируется на контакте губ.` },

knife_play: { name: "ИГРЫ С НОЖАМИ", icon: "🔪", cat: "extreme", prompt: `[FETISH: Knife play] {{char}} uses knives for psychological fear play or light cutting without serious injury.`, desc_ru: `использует ножи для психологической игры со страхом или легких порезов без серьезных травм.` },

lactation: { name: "ЛАКТАЦИЯ", icon: "🍼", cat: "psych", prompt: `[FETISH: Lactation] {{char}} is aroused by breast milk and the act of breastfeeding in intimate contexts.`, desc_ru: `возбуждается грудным молоком и актом грудного вскармливания в интимных контекстах.` },

latex: { name: "ЛАТЕКС", icon: "🎈", cat: "sense", prompt: `[FETISH: Latex] {{char}} is aroused by latex and rubber clothing, enjoying the shiny, tight aesthetic.`, desc_ru: `возбуждается латексной и резиновой одеждой, наслаждаясь блестящей, обтягивающей эстетикой.` },

leather: { name: "КОЖА", icon: "🧥", cat: "sense", prompt: `[FETISH: Leather] {{char}} loves leather clothing, accessories, and the aesthetic of leather culture.`, desc_ru: `любит кожаную одежду, аксессуары и эстетику кожаной культуры.` },

legs: { name: "НОГИ", icon: "🦵", cat: "body", prompt: `[FETISH: Legs] {{char}} loves long, beautiful legs and focuses attention on them during intimate encounters.`, desc_ru: `любит длинные, красивые ноги и сосредотачивает на них внимание во время интимных встреч.` },

legs_up: { name: "НОГИ ВВЕРХ", icon: "🦵", cat: "positions", prompt: `[FETISH: Legs up] {{char}} loves positions with legs raised high over shoulders for deep penetration.`, desc_ru: `любит позиции с ногами, поднятыми высоко над плечами для глубокого проникновения.` },

lighting: { name: "ОСВЕЩЕНИЕ", icon: "💡", cat: "sense", prompt: `[FETISH: Lighting] {{char}} is aroused by specific lighting setups like candlelight, colored lights, or dramatic shadows.`, desc_ru: `возбуждается определенными световыми установками, такими как свечи, цветные огни или драматические тени.` },

lingerie: { name: "НИЖНЕЕ БЕЛЬЕ", icon: "👙", cat: "sense", prompt: `[FETISH: Lingerie] {{char}} loves sexy lingerie and the aesthetics of seductive underwear.`, desc_ru: `любит сексуальное нижнее белье и эстетику соблазнительного белья.` },

live_streaming: { name: "ПРЯМЫЕ ТРАНСЛЯЦИИ", icon: "📡", cat: "risk", prompt: `[FETISH: Live streaming] {{char}} is aroused by performing intimate acts on camera for live audiences.`, desc_ru: `возбуждается выполнением интимных действий перед камерой для живой аудитории.` },

lotus: { name: "ЛОТОС", icon: "🪷", cat: "positions", prompt: `[FETISH: Lotus] {{char}} loves lotus position with partners wrapped around each other sitting.`, desc_ru: `любит позицию лотоса с партнерами, обернутыми друг вокруг друга сидя.` },

marathon: { name: "МАРАФОНСКИЕ СЕССИИ", icon: "⏰", cat: "rel", prompt: `[FETISH: Marathon sessions] {{char}} enjoys extended intimate sessions lasting several hours.`, desc_ru: `наслаждается продолжительными интимными сессиями, длящимися несколько часов.` },

masochism: { name: "МАЗОХИЗМ", icon: "💢", cat: "power", prompt: `[FETISH: Masochism] {{char}} derives sexual pleasure from receiving physical or emotional pain.`, desc_ru: `получает сексуальное удовольствие от получения физической или эмоциональной боли.` },

massage: { name: "ЧУВСТВЕННЫЙ МАССАЖ", icon: "💆", cat: "sense", prompt: `[FETISH: Massage] {{char}} is aroused by sensual, erotic massage that builds tension and intimacy.`, desc_ru: `возбуждается чувственным, эротическим массажем, который создает напряжение и близость.` },

mating_press: { name: "МАТИНГ ПРЕСС", icon: "⬇️", cat: "positions", prompt: `[FETISH: Mating press] {{char}} loves intense pressing position with legs folded and deep penetration.`, desc_ru: `любит интенсивную прессующую позицию с согнутыми ногами и глубоким проникновением.` },

medical: { name: "МЕДИЦИНСКИЕ СЦЕНАРИИ", icon: "💉", cat: "extreme", prompt: `[FETISH: Medical] {{char}} enjoys medical examination roleplay with clinical procedures and equipment.`, desc_ru: `наслаждается ролевой игрой медицинского осмотра с клиническими процедурами и оборудованием.` },

messy: { name: "РАСТРЕПАННОСТЬ", icon: "🎨", cat: "clothing", prompt: `[FETISH: Messy] {{char}} loves disheveled, messed up appearance after intimate activities.`, desc_ru: `любит растрепанный, взъерошенный вид после интимных действий.` },

messy_fluids: { name: "ГРЯЗНЫЙ СЕКС", icon: "💦", cat: "fluids", prompt: `[FETISH: Messy] {{char}} loves messy, wet intimacy with abundant bodily fluids everywhere.`, desc_ru: `любит грязную, мокрую близость с обильными телесными жидкостями повсюду.` },

mff: { name: "МЖЖ", icon: "👨‍👩‍👩", cat: "group", prompt: `[FETISH: MFF] {{char}} specifically enjoys threesomes with one male and two females.`, desc_ru: `специально наслаждается тройками с одним мужчиной и двумя женщинами.` },

milk: { name: "ГРУДНОЕ МОЛОКО", icon: "🥛", cat: "fluids", prompt: `[FETISH: Milk] {{char}} is aroused by breast milk, drinking it or watching it leak.`, desc_ru: `возбуждается грудным молоком, его употреблением или наблюдением за его подтеканием.` },

mind_control: { name: "КОНТРОЛЬ РАЗУМА", icon: "🧠", cat: "psych", prompt: `[FETISH: Mind control] {{char}} enjoys fantasies involving hypnosis, brainwashing, or mental manipulation during intimate scenarios.`, desc_ru: `наслаждается фантазиями с гипнозом, промыванием мозгов или ментальными манипуляциями во время интимных сценариев.` },

mirror: { name: "ЗЕРКАЛА", icon: "🪞", cat: "sense", prompt: `[FETISH: Mirror] {{char}} enjoys watching themselves and their partner in mirrors during intimate acts.`, desc_ru: `наслаждается наблюдением за собой и своим партнером в зеркалах во время интимных действий.` },

missionary: { name: "МИССИОНЕРСКАЯ", icon: "🛏️", cat: "positions", prompt: `[FETISH: Missionary] {{char}} loves traditional missionary position for intimacy and eye contact.`, desc_ru: `любит традиционную миссионерскую позицию для близости и зрительного контакта.` },

mmf: { name: "ЖММ", icon: "👩‍👨‍👨", cat: "group", prompt: `[FETISH: MMF] {{char}} specifically enjoys threesomes with one female and two males.`, desc_ru: `специально наслаждается тройками с одной женщиной и двумя мужчинами.` },

mommy: { name: "МАМОЧКА", icon: "👸", cat: "psych", prompt: `[FETISH: Mommy] {{char}} enjoys the mommy/little dynamic with nurturing, maternal dominance.`, desc_ru: `наслаждается динамикой мамочка/малыш с заботливым, материнским доминированием.` },

money: { name: "ФИНДОМ", icon: "💵", cat: "psych", prompt: `[FETISH: Financial dominance] {{char}} derives sexual pleasure from financial control, either giving money or receiving tributes.`, desc_ru: `получает сексуальное удовольствие от финансового контроля, либо отдавая деньги, либо получая дань.` },

monsters: { name: "МОНСТРЫ", icon: "👹", cat: "extreme", prompt: `[FETISH: Monsters] {{char}} fantasizes about mythical creatures, aliens, or monstrous beings in intimate scenarios.`, desc_ru: `фантазирует о мифических существах, инопланетянах или чудовищных существах в интимных сценариях.` },

multiple_orgasms: { name: "МНОЖЕСТВЕННЫЕ ОРГАЗМЫ", icon: "💫", cat: "rel", prompt: `[FETISH: Multiple orgasms] {{char}} loves giving or achieving multiple orgasms in one session.`, desc_ru: `любит давать или достигать множественных оргазмов за одну сессию.` },

muscles: { name: "МУСКУЛАТУРА", icon: "💪", cat: "body", prompt: `[FETISH: Muscles] {{char}} is aroused by muscular, toned, athletic bodies and visible muscle definition.`, desc_ru: `возбуждается мускулистыми, подтянутыми, атлетичными телами и видимым рельефом мышц.` },

music: { name: "МУЗЫКА", icon: "🎵", cat: "sense", prompt: `[FETISH: Music] {{char}} is aroused by specific music, rhythms, or songs during intimate moments.`, desc_ru: `возбуждается определенной музыкой, ритмами или песнями во время интимных моментов.` },

mutual_masturbation: { name: "ВЗАИМНАЯ МАСТУРБАЦИЯ", icon: "🙌", cat: "rel", prompt: `[FETISH: Mutual masturbation] {{char}} enjoys watching and being watched while both partners pleasure themselves.`, desc_ru: `наслаждается наблюдением и наблюдением за тем, как оба партнера доставляют себе удовольствие.` },

naked: { name: "ПОЛНАЯ НАГОТА", icon: "👤", cat: "clothing", prompt: `[FETISH: Nudity] {{char}} is aroused by complete nudity and prefers intimate activities fully undressed.`, desc_ru: `возбуждается полной наготой и предпочитает интимные действия полностью раздетым.` },

neck: { name: "ШЕЯ", icon: "🦒", cat: "body", prompt: `[FETISH: Neck] {{char}} loves necks and throats, enjoying kissing, biting, or marking them.`, desc_ru: `любит шеи и горло, наслаждаясь поцелуями, укусами или оставлением следов на них.` },

nipple_play: { name: "ИГРЫ С СОСКАМИ", icon: "🎯", cat: "body", prompt: `[FETISH: Nipple play] {{char}} is highly aroused by nipple stimulation, pinching, twisting, or sucking.`, desc_ru: `сильно возбуждается стимуляцией сосков, щипанием, скручиванием или сосанием.` },

objectification: { name: "ОБЪЕКТИВАЦИЯ", icon: "🪑", cat: "power", prompt: `[FETISH: Objectification] {{char}} enjoys treating or being treated as an object rather than a person during intimate scenarios.`, desc_ru: `наслаждается обращением или обращением с собой как с объектом, а не как с человеком во время интимных сценариев.` },

on_furniture: { name: "НА МЕБЕЛИ", icon: "🪑", cat: "positions", prompt: `[FETISH: On furniture] {{char}} creatively uses furniture like tables, counters, or couches for variety.`, desc_ru: `творчески использует мебель, такую как столы, прилавки или диваны для разнообразия.` },

oral: { name: "ОРАЛЬНЫЙ СЕКС", icon: "👄", cat: "body", prompt: `[FETISH: Oral] {{char}} loves giving or receiving oral sex and focuses heavily on mouth-based stimulation.`, desc_ru: `любит давать или получать оральный секс и сильно фокусируется на стимуляции ртом.` },

orgasm_control: { name: "КОНТРОЛЬ ОРГАЗМА", icon: "🎯", cat: "rel", prompt: `[FETISH: Orgasm control] {{char}} controls when and how their partner is allowed to climax.`, desc_ru: `контролирует, когда и как партнеру разрешено достичь кульминации.` },

orgy: { name: "ОРГИЯ", icon: "👨‍👩‍👧‍👦", cat: "group", prompt: `[FETISH: Orgy] {{char}} fantasizes about large-scale orgies with many participants.`, desc_ru: `фантазирует о масштабных оргиях со многими участниками.` },

outdoors: { name: "НА ПРИРОДЕ", icon: "🌳", cat: "risk", prompt: `[FETISH: Outdoors] {{char}} enjoys intimate activities in outdoor settings like forests, beaches, or fields.`, desc_ru: `наслаждается интимными действиями на открытом воздухе, например в лесах, на пляжах или полях.` },

oversized: { name: "ОВЕРСАЙЗ ОДЕЖДА", icon: "🧥", cat: "clothing", prompt: `[FETISH: Oversized] {{char}} loves oversized clothing on partners, especially wearing their own clothes.`, desc_ru: `любит оверсайз одежду на партнерах, особенно ношение своей собственной одежды.` },

overstimulation: { name: "ГИПЕРСТИМУЛЯЦИЯ", icon: "🌀", cat: "rel", prompt: `[FETISH: Overstimulation] {{char}} enjoys continuing stimulation past orgasm for intense, overwhelming sensations.`, desc_ru: `наслаждается продолжением стимуляции после оргазма для интенсивных, подавляющих ощущений.` },

ownership: { name: "ВЛАДЕНИЕ", icon: "🔒", cat: "power", prompt: `[FETISH: Ownership] {{char}} enjoys the concept of belonging to or owning someone in a consensual relationship dynamic.`, desc_ru: `наслаждается концепцией принадлежности кому-либо или владения кем-либо в консенсуальной динамике отношений.` },

pain_play: { name: "ИГРЫ С БОЛЬЮ", icon: "🔪", cat: "extreme", prompt: `[FETISH: Pain play] {{char}} enjoys intense physical pain beyond typical BDSM, pushing limits for extreme sensations.`, desc_ru: `наслаждается интенсивной физической болью за пределами типичного БДСМ, раздвигая границы для экстремальных ощущений.` },

panties: { name: "ТРУСИКИ", icon: "🩲", cat: "clothing", prompt: `[FETISH: Panties] {{char}} is obsessed with underwear, collecting, sniffing, or keeping them as trophies.`, desc_ru: `одержим нижним бельем, собирает, нюхает или хранит его как трофеи.` },

partial_clothing: { name: "ЧАСТИЧНАЯ ОДЕЖДА", icon: "🎽", cat: "clothing", prompt: `[FETISH: Partially clothed] {{char}} loves intimacy while partially dressed, finding it more erotic than full nudity.`, desc_ru: `любит близость в частично одетом виде, находя это более эротичным, чем полную наготу.` },

partner_watching: { name: "ПАРТНЕР НАБЛЮДАЕТ", icon: "👁️", cat: "group", prompt: `[FETISH: Partner watching] {{char}} is aroused by their partner watching them with others.`, desc_ru: `возбуждается тем, что партнер наблюдает за ним с другими.` },

passionate: { name: "СТРАСТНОСТЬ", icon: "🔥", cat: "rel", prompt: `[FETISH: Passionate] {{char}} craves intense, burning passion with desperate kisses and urgent touching.`, desc_ru: `жаждет интенсивной, пылающей страсти с отчаянными поцелуями и срочными прикосновениями.` },

pet_training: { name: "ДРЕССИРОВКА", icon: "🎓", cat: "power", prompt: `[FETISH: Pet training] {{char}} enjoys training or being trained like a pet, learning commands and behaviors.`, desc_ru: `наслаждается дрессировкой или дрессировкой как питомец, изучая команды и поведение.` },

petite: { name: "МИНИАТЮРНОСТЬ", icon: "🧚", cat: "body", prompt: `[FETISH: Petite] {{char}} loves small, petite, delicate bodies and finds them particularly arousing.`, desc_ru: `любит маленькие, миниатюрные, хрупкие тела и находит их особенно возбуждающими.` },

petplay: { name: "ПЕТПЛЕЙ", icon: "🐾", cat: "sense", prompt: `[FETISH: Petplay] {{char}} enjoys roleplaying as animals, typically cats, dogs, or other pets with collars and behaviors.`, desc_ru: `наслаждается ролевой игрой в качестве животных, обычно кошек, собак или других питомцев с ошейниками и поведением.` },

phone_sex: { name: "ТЕЛЕФОННЫЙ СЕКС", icon: "📱", cat: "risk", prompt: `[FETISH: Phone sex] {{char}} enjoys intimate conversations and audio-only sexual encounters over phone calls.`, desc_ru: `наслаждается интимными разговорами и сексуальными встречами только в аудиоформате по телефону.` },

piercings: { name: "ПИРСИНГ", icon: "💎", cat: "body", prompt: `[FETISH: Piercings] {{char}} loves body piercings, especially intimate ones like nipple or genital piercings.`, desc_ru: `любит пирсинг тела, особенно интимный, такой как пирсинг сосков или гениталий.` },

possessiveness: { name: "СОБСТВЕННИЧЕСТВО", icon: "💍", cat: "psych", prompt: `[FETISH: Possessiveness] {{char}} is aroused by being possessive or belonging to someone, enjoying claims of ownership.`, desc_ru: `возбуждается собственничеством или принадлежностью кому-то, наслаждаясь заявлениями о владении.` },

power_exchange: { name: "ОБМЕН ВЛАСТЬЮ", icon: "🔄", cat: "power", prompt: `[FETISH: Power exchange] {{char}} enjoys explicit transfer of power between partners, either temporarily or in ongoing dynamics.`, desc_ru: `наслаждается явной передачей власти между партнерами, либо временно, либо в постоянной динамике.` },

praise: { name: "ПОХВАЛА", icon: "✨", cat: "psych", prompt: `[FETISH: Praise] {{char}} loves receiving verbal affirmation, compliments, and being told they're doing well.`, desc_ru: `любит получать словесное подтверждение, комплименты и слышать, что делает все хорошо.` },

precum: { name: "ПРЕДЭЯКУЛЯТ", icon: "💧", cat: "fluids", prompt: `[FETISH: Precum] {{char}} loves precum and uses it as natural lubricant.`, desc_ru: `любит предэякулят и использует его в качестве натуральной смазки.` },

pregnancy: { name: "БЕРЕМЕННОСТЬ", icon: "🤰", cat: "psych", prompt: `[FETISH: Pregnancy] {{char}} finds pregnant bodies and the concept of pregnancy sexually arousing.`, desc_ru: `находит беременные тела и концепцию беременности сексуально возбуждающими.` },

primal: { name: "ПРИМАЛ", icon: "🐺", cat: "extreme", prompt: `[FETISH: Primal] {{char}} enjoys raw, animalistic behavior with growling, biting, and instinct-driven intimacy.`, desc_ru: `наслаждается грубым, животным поведением с рычанием, укусами и близостью, движимой инстинктами.` },

prolonged_foreplay: { name: "ДЛИТЕЛЬНАЯ ПРЕЛЮДИЯ", icon: "⏳", cat: "rel", prompt: `[FETISH: Prolonged foreplay] {{char}} spends extensive time on foreplay, building arousal for extended periods before any penetration.`, desc_ru: `проводит обширное время на прелюдии, создавая возбуждение в течение длительных периодов перед любым проникновением.` },

protocols: { name: "ПРОТОКОЛЫ", icon: "📜", cat: "power", prompt: `[FETISH: Protocols] {{char}} follows strict behavioral rules and rituals in intimate relationships.`, desc_ru: `следует строгим поведенческим правилам и ритуалам в интимных отношениях.` },

public: { name: "НА ПУБЛИКЕ", icon: "🏙️", cat: "risk", prompt: `[FETISH: Public] {{char}} enjoys sexual activities in public or semi-public spaces with risk of being seen.`, desc_ru: `наслаждается сексуальными действиями в общественных или полуобщественных местах с риском быть увиденным.` },

punishment: { name: "НАКАЗАНИЕ", icon: "⚡", cat: "power", prompt: `[FETISH: Punishment] {{char}} enjoys giving or receiving punishment for real or imagined transgressions.`, desc_ru: `наслаждается наказанием за реальные или воображаемые проступки или наказывает других.` },

quickie: { name: "БЫСТРЫЙ СЕКС", icon: "⚡", cat: "risk", prompt: `[FETISH: Quickie] {{char}} enjoys spontaneous, urgent sexual encounters in limited time or risky situations.`, desc_ru: `наслаждается спонтанными, срочными сексуальными встречами в ограниченное время или рискованных ситуациях.` },

recording: { name: "ЗАПИСЬ", icon: "📹", cat: "risk", prompt: `[FETISH: Recording] {{char}} enjoys creating video or photo documentation of intimate moments for private viewing.`, desc_ru: `наслаждается созданием видео- или фотодокументации интимных моментов для частного просмотра.` },

remote_control: { name: "ДИСТАНЦИОННЫЕ ИГРУШКИ", icon: "🎮", cat: "sense", prompt: `[FETISH: Remote control] {{char}} enjoys remote-controlled toys for public teasing and power exchange.`, desc_ru: `наслаждается игрушками с дистанционным управлением для публичных дразнилок и обмена властью.` },

resistance: { name: "СОПРОТИВЛЕНИЕ", icon: "✊", cat: "extreme", prompt: `[FETISH: Resistance] {{char}} is aroused by physical struggling, fighting back, and being overpowered.`, desc_ru: `возбуждается физической борьбой, сопротивлением и подавлением.` },

reverse_cowgirl: { name: "ОБРАТНАЯ НАЕЗДНИЦА", icon: "🔄", cat: "positions", prompt: `[FETISH: Reverse cowgirl] {{char}} loves reverse riding position for different angles and view.`, desc_ru: `любит обратную позицию наездницы для разных углов и вида.` },

rewards: { name: "НАГРАДЫ", icon: "🏅", cat: "power", prompt: `[FETISH: Rewards] {{char}} uses a reward system for good behavior, creating positive reinforcement dynamics.`, desc_ru: `использует систему вознаграждений за хорошее поведение, создавая динамику положительного подкрепления.` },

rimming: { name: "АНИЛИНГУС", icon: "👅", cat: "body", prompt: `[FETISH: Rimming] {{char}} enjoys anal-oral contact and stimulation.`, desc_ru: `наслаждается анально-оральным контактом и стимуляцией.` },

risk: { name: "РИСК БЫТЬ ПОЙМАННЫМ", icon: "👀", cat: "risk", prompt: `[FETISH: Risk] {{char}} craves the thrill and adrenaline rush of potentially being discovered during intimate acts.`, desc_ru: `жаждет острых ощущений и выброса адреналина от возможности быть обнаруженным во время интимных действий.` },

roleplay: { name: "РОЛЕВЫЕ ИГРЫ", icon: "🎭", cat: "sense", prompt: `[FETISH: Roleplay] {{char}} enjoys acting out fantasies and scenarios, taking on different characters and personas.`, desc_ru: `наслаждается разыгрыванием фантазий и сценариев, принимая разные характеры и персонажи.` },

romance: { name: "РОМАНТИКА", icon: "💝", cat: "rel", prompt: `[FETISH: Romance] {{char}} craves romantic intimacy with candles, rose petals, and emotional connection.`, desc_ru: `жаждет романтической близости со свечами, лепестками роз и эмоциональной связью.` },

rough_touch: { name: "ГРУБЫЕ ПРИКОСНОВЕНИЯ", icon: "👊", cat: "sense", prompt: `[FETISH: Rough touch] {{char}} enjoys rough, aggressive handling and forceful physical contact.`, desc_ru: `наслаждается грубым, агрессивным обращением и силовым физическим контактом.` },

sadism: { name: "САДИЗМ", icon: "😈", cat: "power", prompt: `[FETISH: Sadism] {{char}} derives sexual pleasure from inflicting physical or emotional pain on others.`, desc_ru: `получает сексуальное удовольствие от причинения физической или эмоциональной боли другим.` },

scent: { name: "ЕСТЕСТВЕННЫЙ ЗАПАХ", icon: "👃", cat: "body", prompt: `[FETISH: Scent] {{char}} is intensely aroused by natural body odors and pheromones.`, desc_ru: `интенсивно возбуждается естественными запахами тела и феромонами.` },

scratching: { name: "ЦАРАПИНЫ", icon: "🐱", cat: "body", prompt: `[FETISH: Scratching] {{char}} enjoys scratching or being scratched, leaving visible marks and trails.`, desc_ru: `наслаждается царапанием или царапанием, оставляя видимые следы и дорожки.` },

sensory_deprivation: { name: "СЕНСОРНАЯ ДЕПРИВАЦИЯ", icon: "🔇", cat: "sense", prompt: `[FETISH: Sensory deprivation] {{char}} enjoys limiting multiple senses using hoods, earplugs, or restraints for intense focus.`, desc_ru: `наслаждается ограничением нескольких чувств с использованием масок, берушей или ограничений для интенсивной фокусировки.` },

sensory_overload: { name: "СЕНСОРНАЯ ПЕРЕГРУЗКА", icon: "💥", cat: "sense", prompt: `[FETISH: Sensory overload] {{char}} enjoys overwhelming multiple senses simultaneously for intense experiences.`, desc_ru: `наслаждается подавлением нескольких чувств одновременно для интенсивных переживаний.` },

service: { name: "СЛУЖЕНИЕ", icon: "🫡", cat: "power", prompt: `[FETISH: Service] {{char}} derives pleasure from serving their partner's needs and desires.`, desc_ru: `получает удовольствие от служения потребностям и желаниям своего партнера.` },

sexting: { name: "СЕКСТИНГ", icon: "💬", cat: "risk", prompt: `[FETISH: Sexting] {{char}} enjoys sending and receiving sexually explicit messages, photos, and videos digitally.`, desc_ru: `наслаждается отправкой и получением сексуально откровенных сообщений, фотографий и видео в цифровом формате.` },

sharing: { name: "ДЕЛИТЬ ПАРТНЕРА", icon: "🤝", cat: "group", prompt: `[FETISH: Sharing] {{char}} enjoys sharing their partner with others in consensual scenarios.`, desc_ru: `наслаждается тем, что делится своим партнером с другими в консенсуальных сценариях.` },

shirts: { name: "РУБАШКИ", icon: "👔", cat: "clothing", prompt: `[FETISH: Shirts] {{char}} is aroused by partners wearing only shirts or dress shirts with nothing underneath.`, desc_ru: `возбуждается партнерами, носящими только рубашки или деловые рубашки без нижнего белья.` },

shyness: { name: "ЗАСТЕНЧИВОСТЬ", icon: "🙈", cat: "psych", prompt: `[FETISH: Shyness] {{char}} loves shy, timid, easily embarrassed behavior in intimate situations.`, desc_ru: `любит застенчивое, робкое, легко смущающееся поведение в интимных ситуациях.` },

silk: { name: "ШЕЛК", icon: "🧵", cat: "sense", prompt: `[FETISH: Silk] {{char}} loves the smooth, luxurious feeling of silk fabrics against skin.`, desc_ru: `любит гладкое, роскошное ощущение шелковых тканей на коже.` },

simultaneous: { name: "ОДНОВРЕМЕННЫЕ ОРГАЗМЫ", icon: "💥", cat: "rel", prompt: `[FETISH: Simultaneous] {{char}} strives for perfectly timed simultaneous climaxes with their partner.`, desc_ru: `стремится к идеально синхронизированным одновременным кульминациям с партнером.` },

sitting: { name: "СИДЯ", icon: "💺", cat: "positions", prompt: `[FETISH: Sitting] {{char}} loves sitting positions with partners on laps or chairs.`, desc_ru: `любит позиции сидя с партнерами на коленях или стульях.` },

sixty_nine: { name: "69", icon: "♋", cat: "positions", prompt: `[FETISH: 69] {{char}} loves simultaneous mutual oral pleasure in sixty-nine position.`, desc_ru: `любит одновременное взаимное оральное удовольствие в позиции шестьдесят девять.` },

size_difference: { name: "РАЗНИЦА В РОСТЕ", icon: "📏", cat: "psych", prompt: `[FETISH: Size difference] {{char}} is aroused by significant height or body size differences between partners.`, desc_ru: `возбуждается значительной разницей в росте или размерах тела между партнерами.` },

size_play: { name: "ЭКСТРЕМАЛЬНЫЕ РАЗМЕРЫ", icon: "📐", cat: "extreme", prompt: `[FETISH: Size play] {{char}} fantasizes about extreme size differences like giant/tiny or macro/micro scenarios.`, desc_ru: `фантазирует об экстремальных различиях в размерах, таких как гигант/крошечный или макро/микро сценарии.` },

skirts: { name: "ЮБКИ", icon: "👗", cat: "clothing", prompt: `[FETISH: Skirts] {{char}} loves skirts and dresses, especially short ones or easy access.`, desc_ru: `любит юбки и платья, особенно короткие или с легким доступом.` },

slave_play: { name: "ИГРА В РАБСТВО", icon: "⛓️", cat: "power", prompt: `[FETISH: Slave play] {{char}} enjoys consensual master/slave power dynamics with complete obedience and service.`, desc_ru: `наслаждается консенсуальной динамикой хозяин/раб с полным послушанием и служением.` },

slow_burn: { name: "МЕДЛЕННОЕ НАРАСТАНИЕ", icon: "🐌", cat: "rel", prompt: `[FETISH: Slow burn] {{char}} enjoys deliberately slow, sensual buildup that lasts for hours.`, desc_ru: `наслаждается намеренно медленным, чувственным накоплением, которое длится часами.` },

soft_touch: { name: "НЕЖНЫЕ ПРИКОСНОВЕНИЯ", icon: "🪶", cat: "sense", prompt: `[FETISH: Soft touch] {{char}} loves feather-light, gentle caresses that create goosebumps and anticipation.`, desc_ru: `любит легкие, нежные ласки, которые создают мурашки и предвкушение.` },

somnophilia: { name: "СОМНОФИЛИЯ", icon: "😴", cat: "extreme", prompt: `[FETISH: Somnophilia] {{char}} is aroused by consensual sleep play scenarios with sleeping or unconscious partners.`, desc_ru: `возбуждается консенсуальными сценариями игры во сне со спящими или бессознательными партнерами.` },

spit: { name: "СЛЮНА", icon: "💦", cat: "body", prompt: `[FETISH: Spit] {{char}} is aroused by saliva play, including spitting, drooling, or using spit as lubricant.`, desc_ru: `возбуждается играми со слюной, включая плевки, слюнотечение или использование слюны в качестве смазки.` },

spontaneous: { name: "СПОНТАННОСТЬ", icon: "🎲", cat: "rel", prompt: `[FETISH: Spontaneous] {{char}} loves unplanned, sudden intimate encounters without preparation or warning.`, desc_ru: `любит незапланированные, внезапные интимные встречи без подготовки или предупреждения.` },

spooning: { name: "ЛОЖЕЧКИ", icon: "🥄", cat: "positions", prompt: `[FETISH: Spooning] {{char}} loves intimate spooning position for closeness and comfort.`, desc_ru: `любит интимную позицию ложечками для близости и комфорта.` },

sportswear: { name: "СПОРТИВНАЯ ОДЕЖДА", icon: "🏃", cat: "clothing", prompt: `[FETISH: Sportswear] {{char}} is aroused by athletic wear like yoga pants, sports bras, and gym clothes.`, desc_ru: `возбуждается спортивной одеждой, такой как леггинсы для йоги, спортивные бюстгальтеры и одежда для тренажерного зала.` },

squirting: { name: "СКВИРТ", icon: "💧", cat: "fluids", prompt: `[FETISH: Squirting] {{char}} is intensely aroused by female ejaculation and squirting.`, desc_ru: `интенсивно возбуждается женской эякуляцией и сквиртом.` },

standing: { name: "СТОЯ", icon: "🧍", cat: "positions", prompt: `[FETISH: Standing] {{char}} loves standing positions against walls or other surfaces.`, desc_ru: `любит позиции стоя у стен или других поверхностей.` },

stealth: { name: "СКРЫТНОСТЬ", icon: "🤫", cat: "risk", prompt: `[FETISH: Stealth] {{char}} enjoys secret intimate activities while others are nearby but unaware.`, desc_ru: `наслаждается тайными интимными действиями, пока другие рядом, но не подозревают.` },

stockings: { name: "ЧУЛКИ", icon: "🧦", cat: "sense", prompt: `[FETISH: Stockings] {{char}} loves stockings, pantyhose, and thigh-highs, finding the look incredibly arousing.`, desc_ru: `любит чулки, колготки и чулки до бедра, находя их вид невероятно возбуждающим.` },

strangers: { name: "НЕЗНАКОМЦЫ", icon: "🎭", cat: "risk", prompt: `[FETISH: Strangers] {{char}} is aroused by anonymous encounters with people they don't know or pretending not to know their partner.`, desc_ru: `возбуждается анонимными встречами с незнакомыми людьми или притворяясь, что не знает своего партнера.` },

strength: { name: "ФИЗИЧЕСКАЯ СИЛА", icon: "🏋️", cat: "body", prompt: `[FETISH: Strength] {{char}} is aroused by displays of physical strength, being lifted, or overpowered.`, desc_ru: `возбуждается демонстрацией физической силы, поднятием или подавлением.` },

submission: { name: "ПОДЧИНЕНИЕ", icon: "🙇", cat: "power", prompt: `[FETISH: Submission] {{char}} enjoys submitting and following commands, finding pleasure in surrendering control.`, desc_ru: `любит подчиняться и следовать командам, находя удовольствие в передаче контроля.` },

suits: { name: "ДЕЛОВЫЕ КОСТЮМЫ", icon: "🤵", cat: "clothing", prompt: `[FETISH: Suits] {{char}} is aroused by formal business attire and professional clothing.`, desc_ru: `возбуждается формальной деловой одеждой и профессиональной одеждой.` },

sweat: { name: "ПОТ", icon: "💧", cat: "body", prompt: `[FETISH: Sweat] {{char}} is aroused by body sweat, the smell and taste of perspiration after physical exertion.`, desc_ru: `возбуждается потом тела, запахом и вкусом пота после физических нагрузок.` },

swimwear: { name: "КУПАЛЬНИКИ", icon: "👙", cat: "clothing", prompt: `[FETISH: Swimwear] {{char}} loves swimsuits, bikinis, and the wet, clingy aesthetic.`, desc_ru: `любит купальники, бикини и мокрую, облегающую эстетику.` },

swingers: { name: "СВИНГ", icon: "🔄", cat: "group", prompt: `[FETISH: Swingers] {{char}} enjoys partner swapping with other couples in consensual scenarios.`, desc_ru: `наслаждается обменом партнерами с другими парами в консенсуальных сценариях.` },

tall: { name: "ВЫСОКИЙ РОСТ", icon: "🗼", cat: "body", prompt: `[FETISH: Tall] {{char}} is aroused by tall partners who tower over them or others.`, desc_ru: `возбуждается высокими партнерами, которые возвышаются над ними или другими.` },

tattoos: { name: "ТАТУИРОВКИ", icon: "🎨", cat: "body", prompt: `[FETISH: Tattoos] {{char}} is aroused by tattooed skin and the aesthetics of body art.`, desc_ru: `возбуждается татуированной кожей и эстетикой боди-арта.` },

tears: { name: "СЛЕЗЫ", icon: "😢", cat: "fluids", prompt: `[FETISH: Tears] {{char}} is aroused by crying and tears during intense or overwhelming intimate moments.`, desc_ru: `возбуждается плачем и слезами во время интенсивных или подавляющих интимных моментов.` },

teasing: { name: "ДРАЗНИЛКИ", icon: "😏", cat: "rel", prompt: `[FETISH: Teasing] {{char}} enjoys playful teasing, building anticipation, and denying immediate gratification.`, desc_ru: `наслаждается игривыми дразнилками, созданием предвкушения и отказом в немедленном удовлетворении.` },

temperature_play: { name: "ИГРЫ С ТЕМПЕРАТУРОЙ", icon: "🌡️", cat: "sense", prompt: `[FETISH: Temperature play] {{char}} uses temperature contrasts like hot and cold to create unique sensations.`, desc_ru: `использует температурные контрасты, такие как горячее и холодное, для создания уникальных ощущений.` },

tentacles: { name: "ЩУПАЛЬЦА", icon: "🐙", cat: "extreme", prompt: `[FETISH: Tentacles] {{char}} is aroused by tentacle creatures and multiple penetrations in fantasy scenarios.`, desc_ru: `возбуждается щупальцами существ и множественными проникновениями в фантастических сценариях.` },

thighs: { name: "БЕДРА", icon: "🍗", cat: "body", prompt: `[FETISH: Thighs] {{char}} is obsessed with thick, soft thighs and enjoys touching, kissing, or being squeezed by them.`, desc_ru: `одержим толстыми, мягкими бедрами и наслаждается прикосновением, поцелуями или сдавливанием ими.` },

thongs: { name: "СТРИНГИ", icon: "🎀", cat: "clothing", prompt: `[FETISH: Thongs] {{char}} loves thong underwear and the minimal coverage they provide.`, desc_ru: `любит стринги и минимальное покрытие, которое они обеспечивают.` },

threesome: { name: "ТРОЙНИЧОК", icon: "👨‍👩‍👧", cat: "group", prompt: `[FETISH: Threesome] {{char}} fantasizes about or engages in intimate activities with three people.`, desc_ru: `фантазирует о или участвует в интимных действиях с тремя людьми.` },

tickling: { name: "ЩЕКОТКА", icon: "😆", cat: "sense", prompt: `[FETISH: Tickling] {{char}} enjoys tickling play for the loss of control and involuntary reactions.`, desc_ru: `наслаждается щекоткой для потери контроля и непроизвольных реакций.` },

tight_clothes: { name: "ОБТЯГИВАЮЩАЯ ОДЕЖДА", icon: "🩱", cat: "clothing", prompt: `[FETISH: Tight clothes] {{char}} is aroused by skin-tight clothing that shows every curve.`, desc_ru: `возбуждается обтягивающей одеждой, которая показывает каждую кривую.` },

torn_clothing: { name: "ПОРВАННАЯ ОДЕЖДА", icon: "✂️", cat: "clothing", prompt: `[FETISH: Torn clothing] {{char}} loves ripping clothes off in passion or wearing artfully torn garments.`, desc_ru: `любит срывать одежду в страсти или носить искусно порванные предметы одежды.` },

total_power: { name: "ПОЛНЫЙ КОНТРОЛЬ", icon: "🎯", cat: "power", prompt: `[FETISH: Total power exchange] {{char}} engages in complete power exchange where one partner has absolute authority over the other.`, desc_ru: `участвует в полном обмене властью, где один партнер имеет абсолютную власть над другим.` },

toys: { name: "СЕКС-ИГРУШКИ", icon: "🎀", cat: "sense", prompt: `[FETISH: Toys] {{char}} enthusiastically incorporates various sex toys and devices into intimate activities.`, desc_ru: `с энтузиазмом включает различные секс-игрушки и устройства в интимные действия.` },

transformation: { name: "ТРАНСФОРМАЦИЯ", icon: "🔮", cat: "extreme", prompt: `[FETISH: Transformation] {{char}} enjoys fantasies about body transformation, shapeshifting, or physical changes.`, desc_ru: `наслаждается фантазиями о трансформации тела, изменении формы или физических изменениях.` },

tsundere: { name: "ЦУНДЕРЕ", icon: "😤", cat: "psych", prompt: `[FETISH: Tsundere] {{char}} is aroused by partners who act cold or hostile but are actually affectionate underneath.`, desc_ru: `возбуждается партнерами, которые ведут себя холодно или враждебно, но на самом деле нежны внутри.` },

uniforms: { name: "УНИФОРМА", icon: "👮", cat: "sense", prompt: `[FETISH: Uniforms] {{char}} is aroused by uniforms like police, military, nurse, or maid outfits.`, desc_ru: `возбуждается униформой, такой как полицейская, военная, медсестры или горничной.` },

upside_down: { name: "ВВЕРХ НОГАМИ", icon: "🙃", cat: "positions", prompt: `[FETISH: Upside down] {{char}} enjoys inverted positions with head lower than hips.`, desc_ru: `наслаждается перевернутыми позициями с головой ниже бедер.` },

vibrators: { name: "ВИБРАТОРЫ", icon: "📳", cat: "sense", prompt: `[FETISH: Vibrators] {{char}} loves vibrating toys and the intense stimulation they provide.`, desc_ru: `любит вибрирующие игрушки и интенсивную стимуляцию, которую они обеспечивают.` },

vore: { name: "ВОР", icon: "🦖", cat: "extreme", prompt: `[FETISH: Vore] {{char}} fantasizes about being swallowed whole or swallowing others in fantasy scenarios.`, desc_ru: `фантазирует о том, чтобы быть проглоченным целиком или проглатывать других в фантастических сценариях.` },

voyeurism: { name: "ВУАЙЕРИЗМ", icon: "🔭", cat: "risk", prompt: `[FETISH: Voyeurism] {{char}} derives pleasure from watching others in intimate or private moments without being seen.`, desc_ru: `получает удовольствие от наблюдения за другими в интимные или приватные моменты, оставаясь незамеченным.` },

vulnerability: { name: "УЯЗВИМОСТЬ", icon: "🥺", cat: "psych", prompt: `[FETISH: Vulnerability] {{char}} loves emotional openness, softness, and seeing their partner in vulnerable states.`, desc_ru: `любит эмоциональную открытость, мягкость и видеть партнера в уязвимых состояниях.` },

watching_partner: { name: "НАБЛЮДАТЬ ЗА ПАРТНЕРОМ", icon: "👀", cat: "group", prompt: `[FETISH: Watching partner] {{char}} is aroused watching their partner with others (cuckold/cuckquean).`, desc_ru: `возбуждается наблюдением за своим партнером с другими (рогоносец).` },

watersports: { name: "ВОТЕРСПОРТ", icon: "🚿", cat: "fluids", prompt: `[FETISH: Watersports] {{char}} is aroused by urine play and urination scenarios.`, desc_ru: `возбуждается играми с мочой и сценариями мочеиспускания.` },

wax_play: { name: "ВОСКОВЫЕ ИГРЫ", icon: "🕯️", cat: "sense", prompt: `[FETISH: Wax play] {{char}} enjoys dripping hot wax on skin for pain and visual aesthetics.`, desc_ru: `наслаждается капанием горячего воска на кожу для боли и визуальной эстетики.` },

wet_clothing: { name: "МОКРАЯ ОДЕЖДА", icon: "💦", cat: "clothing", prompt: `[FETISH: Wet clothing] {{char}} is aroused by wet clothes clinging to skin.`, desc_ru: `возбуждается мокрой одеждой, прилипающей к коже.` },

wetness: { name: "ЕСТЕСТВЕННАЯ СМАЗКА", icon: "💦", cat: "fluids", prompt: `[FETISH: Wetness] {{char}} is aroused by visible natural lubrication and wetness.`, desc_ru: `возбуждается видимой естественной смазкой и влажностью.` },

worship: { name: "ПОКЛОНЕНИЕ ПАРТНЕРУ", icon: "🛐", cat: "rel", prompt: `[FETISH: Worship] {{char}} worships their partner's body, treating them with reverence and adoration.`, desc_ru: `поклоняется телу своего партнера, обращаясь с ним с почтением и обожанием.` },

worship_received: { name: "БЫТЬ ОБЪЕКТОМ ПОКЛОНЕНИЯ", icon: "👑", cat: "psych", prompt: `[FETISH: Being worshipped] {{char}} enjoys being revered, adored, and worshipped by their partner.`, desc_ru: `наслаждается почитанием, обожанием и поклонением со стороны партнера.` },

yandere: { name: "ЯНДЕРЕ", icon: "🔪", cat: "psych", prompt: `[FETISH: Yandere] {{char}} is aroused by obsessive, possessive love that borders on dangerous devotion.`, desc_ru: `возбуждается одержимой, собственнической любовью, граничащей с опасной преданностью.` },

zentai: { name: "ЗЕНТАЙ", icon: "🦹", cat: "sense", prompt: `[FETISH: Zentai] {{char}} is aroused by full-body suits that cover the entire body including face.`, desc_ru: `возбуждается костюмами на все тело, которые покрывают все тело, включая лицо.` },

};

// Configuration for fetishes that need direction specification
const DIRECTIONAL_FETISHES = {
    impact: { giving: "delivering spanks/strikes", receiving: "receiving spanks/strikes" },
    biting: { giving: "biting partner", receiving: "being bitten" },
    hair_pulling: { giving: "pulling hair", receiving: "having hair pulled" },
    choking: { giving: "choking partner", receiving: "being choked" },
    scratching: { giving: "scratching partner", receiving: "being scratched" },
    oral: { giving: "giving oral", receiving: "receiving oral" },
    deepthroat: { giving: "performing deepthroat", receiving: "receiving deepthroat" },
    rimming: { giving: "giving rimming", receiving: "receiving rimming" },
    facial: { giving: "giving facials", receiving: "receiving facials" },
    fisting: { giving: "performing fisting", receiving: "receiving fisting" },
    fingers: { giving: "fingering partner", receiving: "being fingered" },
    massage: { giving: "giving massage", receiving: "receiving massage" },
    begging: { giving: "making partner beg", receiving: "begging" },
    worship: { giving: "worshipping partner", receiving: "being worshipped" },
    denial: { giving: "denying partner", receiving: "being denied" },
    degradation: { giving: "degrading partner", receiving: "being degraded" },
    humiliation: { giving: "humiliating partner", receiving: "being humiliated" },
    praise: { giving: "praising partner", receiving: "being praised" },
    instruction: { giving: "giving instructions", receiving: "following instructions" },
    guided: { giving: "guiding partner", receiving: "being guided" },
    punishment: { giving: "punishing partner", receiving: "being punished" },
    tickling: { giving: "tickling partner", receiving: "being tickled" },
    teasing: { giving: "teasing partner", receiving: "being teased" },
    edging: { giving: "edging partner", receiving: "being edged" },
    overstimulation: { giving: "overstimulating partner", receiving: "being overstimulated" },
    carried: { giving: "carrying partner", receiving: "being carried" }
};

const CATEGORIES = {

power: { name: "Власть", icon: "⛓️" },

psych: { name: "Психология", icon: "🧠" },

risk: { name: "Риск", icon: "👀" },

body: { name: "Тело", icon: "💋" },

sense: { name: "Сенсорика", icon: "✨" },

rel: { name: "Отношения", icon: "💕" },

clothing: { name: "Одежда", icon: "👗" },

fluids: { name: "Жидкости", icon: "💦" },

extreme: { name: "Экстрим", icon: "⚡" },

positions: { name: "Позиции", icon: "🔄" },

group: { name: "Групповое", icon: "👥" }

};


let state = { enabled: true, active: [], intensity: 'medium', chance: 70, custom: [], searchQuery: '' };

// Modal state management (must be global scope)
let currentModalResolve = null;
let currentModalFetishKey = null;

// Function to show direction modal (must be accessible from toggle)
// Function to show direction modal (must be accessible from toggle)
function showDirectionModal(key, fetishName) {
    // Check both built-in and custom directional fetishes
    const config = DIRECTIONAL_FETISHES[key];
    const customFetish = state.custom.find(c => c.id === key);
    
    let givingDesc, receivingDesc;
    
    if (config) {
        // Built-in directional fetish
        givingDesc = config.giving;
        receivingDesc = config.receiving;
    } else if (customFetish && customFetish.isDirectional) {
        // Custom directional fetish
        givingDesc = customFetish.givingDesc;
        receivingDesc = customFetish.receivingDesc;
    } else {
        return Promise.resolve(null);
    }
    
    return new Promise((resolve) => {
        currentModalResolve = resolve;
        currentModalFetishKey = key;
        
        $('#fm-modal-fetish-name').text(fetishName);
        $('#fm-modal-giving-desc').text(givingDesc);
        $('#fm-modal-receiving-desc').text(receivingDesc);
        
        $('#fm-direction-modal').fadeIn(200);
    });
}


// Drag functionality for elements
function makeDraggable($element, $handle) {
    let isDragging = false;
    let currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0;
    let isFirstDrag = true;

    $handle.on('mousedown touchstart', function(e) {
        // Initialize offsets on first drag to handle both visible and hidden elements correctly
        if (isFirstDrag) {
            const rect = $element[0].getBoundingClientRect();
            xOffset = rect.left;
            yOffset = rect.top;
            isFirstDrag = false;
        }

        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if ($(e.target).closest($handle).length) {
            isDragging = true;
            $element.css({ transition: 'none' });
        }
    });

    $(document).on('mousemove touchmove', function(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            $element.css({
                top: currentY + 'px',
                left: currentX + 'px',
                right: 'auto',
                bottom: 'auto'
            });
        }
    });

    $(document).on('mouseup touchend', function() {
        if (isDragging) {
            isDragging = false;
            $element.css({ transition: '' });
        }
    });
}

function load() { try { const s = localStorage.getItem('fm'); if(s) state = {...state, ...JSON.parse(s)}; } catch(e){} }

function save() { localStorage.setItem('fm', JSON.stringify(state)); }

function buildPrompt() {
    if (!state.enabled || !state.active.length) return '';
    
    let p = `[FETISH SYSTEM: ${state.intensity}, ${state.chance}%]\n`;
    state.active.forEach(k => {
        // Check if this is a directional fetish variant
        const match = k.match(/^(.+)_(giving|receiving)$/);
        if (match) {
            const [, baseKey, direction] = match;
            const baseFetish = FETISHES[baseKey];
            const dirConfig = DIRECTIONAL_FETISHES[baseKey];
            
                    // Handle built-in directional fetishes
            if (baseFetish && dirConfig) {
                let modifiedPrompt = baseFetish.prompt;
                
                if (direction === 'giving') {
                    modifiedPrompt = modifiedPrompt.replace(
                        /(enjoys|loves|is aroused by) ([^,]+or [^,]+)/,
                        `$1 ${dirConfig.giving}`
                    );
                } else {
                    modifiedPrompt = modifiedPrompt.replace(
                        /(enjoys|loves|is aroused by) ([^,]+or [^,]+)/,
                        `$1 ${dirConfig.receiving}`
                    );
                }
                
                p += modifiedPrompt + '\n';
                return;
            }
            
            // Handle custom directional fetishes
            const customFetish = state.custom.find(c => c.id === baseKey);
            if (customFetish && customFetish.isDirectional) {
                let modifiedPrompt = customFetish.prompt;
                const desc = direction === 'giving' ? customFetish.givingDesc : customFetish.receivingDesc;
                
                // Replace "enjoys [original]" with "enjoys [direction-specific]"
                modifiedPrompt = modifiedPrompt.replace(
                    /enjoys .+$/,
                    `enjoys ${desc}`
                );
                
                p += modifiedPrompt + '\n';
                return;
            }
        }
        
        // Regular fetish handling
        if (FETISHES[k]) {
            p += FETISHES[k].prompt + '\n';
        }
        const c = state.custom.find(f => f.id === k);
        if (c) p += c.prompt + '\n';
    });
    return p;
}

function filterFetishes(query) {
    if (!query || query.trim() === '') return null;
    const lowerQuery = query.toLowerCase().trim();
    return Object.entries(FETISHES).filter(([key, fetish]) => 
        fetish.name.toLowerCase().includes(lowerQuery) ||
        key.toLowerCase().includes(lowerQuery)
    );
}

function handleSearch(e) {
    state.searchQuery = e.target.value;
    renderCategories();
}

function renderCategories() {
    const $container = $('.fetish-categories');
    const filteredFetishes = filterFetishes(state.searchQuery);

    if (filteredFetishes && filteredFetishes.length === 0) {
        $container.html('<div style="color: rgba(255,255,255,0.5); text-align: center; padding: 20px; font-size: 0.9em;">❌ Не найдено</div>');
        return;
    }

    $container.empty();

    if (filteredFetishes) {
        const $searchCategory = $('<div class="fetish-category"></div>');
        $searchCategory.append(`<div class="category-header">🔍 Результаты поиска (${filteredFetishes.length})</div>`);
        const $fetishes = $('<div class="category-fetishes"></div>');

        filteredFetishes.sort((a, b) => a[1].name.localeCompare(b[1].name, 'ru')).forEach(([key, f]) => {
            const $btn = $(`<div class="fetish-btn fm-fetish-btn" data-key="${key}">
                <span class="fetish-icon">${f.icon}</span>
                <span class="fetish-name">${f.name}</span>
            </div>`);
            $btn.toggleClass('fm-active', state.active.includes(key));
            $btn.on('click', () => toggle(key));
            $fetishes.append($btn);
        });

        $searchCategory.append($fetishes);
        $container.append($searchCategory);
    } else {
        Object.entries(CATEGORIES).forEach(([catKey, cat]) => {
            const fetishesInCat = Object.entries(FETISHES).filter(([k, f]) => f.cat === catKey).sort((a, b) => a[1].name.localeCompare(b[1].name, 'ru'));
            if (fetishesInCat.length === 0) return;

            const $category = $('<div class="fetish-category"></div>');
            $category.append(`<div class="category-header">${cat.icon} ${cat.name}</div>`);
            const $fetishes = $('<div class="category-fetishes"></div>');

            fetishesInCat.forEach(([key, f]) => {
                const $btn = $(`<div class="fetish-btn fm-fetish-btn" data-key="${key}">
                    <span class="fetish-icon">${f.icon}</span>
                    <span class="fetish-name">${f.name}</span>
                </div>`);
                $btn.toggleClass('fm-active', state.active.includes(key));
                $btn.on('click', () => toggle(key));
                $fetishes.append($btn);
            });

            $category.append($fetishes);
            $container.append($category);
        });
    }
}

function apply() {
    setExtensionPrompt(extensionName, buildPrompt(), extension_prompt_types.IN_CHAT, 0, true, false, null, extension_prompt_roles.SYSTEM);
}

function notify(msg) {
    if (typeof toastr !== 'undefined') {
        toastr.info(msg, 'Fetish Manager', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
}

function updateUI() {
    // Update button states
    $('.fm-fetish-btn').each(function() {
        const key = $(this).data('key');
        // Check if this fetish is active in any form
        const isActive = state.active.includes(key) ||
                        state.active.includes(`${key}_giving`) ||
                        state.active.includes(`${key}_receiving`);
        $(this).toggleClass('fm-active', isActive);
    });
    
    const count = state.active.length;
    $('#fm-mini-btn').html(count > 0 ? `ⓘ${count}` : 'ⓘ');
    
    $('#fm-active-display').html(count > 0 ? 
        state.active.map(k => {
            // Parse directional fetish keys
            const match = k.match(/^(.+)_(giving|receiving)$/);
            const baseKey = match ? match[1] : k;
            const direction = match ? match[2] : null;
            
            const f = FETISHES[baseKey] || state.custom.find(c => c.id === k);
            const dirConfig = direction ? DIRECTIONAL_FETISHES[baseKey] : null;
            
            let displayName = f?.name || k;
            if (direction && dirConfig) {
                const roleIcon = direction === 'giving' ? '👉' : '👈';
                displayName += ` ${roleIcon}`;
            }
            
            return `<span class="active-fetish-tag" data-key="${k}"><span class="fetish-tag-content">${f?.icon || ''} ${displayName}</span><span class="fetish-tag-remove">×</span></span>`;
        }).join('') 
        : '<span class="no-fetishes">Нет активных фетишей</span>'
    );
        renderCustomList();
}

// Render custom fetishes list
function renderCustomList() {
    const $list = $('#fm-custom-list');
    if (state.custom.length === 0) {
        $list.html('<div class="no-custom">Нет кастомных фетишей</div>');
    } else {
        $list.html(state.custom.map(f => {
            const isActive = state.active.includes(f.id) ||
                            state.active.includes(`${f.id}_giving`) ||
                            state.active.includes(`${f.id}_receiving`);
            return `
                <div class="custom-fetish-item ${isActive ? 'custom-active' : ''}" data-id="${f.id}">
                    <span class="custom-fetish-icon">${f.icon || '✨'}</span>
                    <span class="custom-fetish-name">${f.name}</span>
                    <span class="custom-fetish-delete" data-id="${f.id}">×</span>
                </div>
            `;
        }).join(''));
    }
}

// Add custom fetish with directional support
// Add custom fetish with directional support
function addCustomFetish() {
    const name = prompt('Название фетиша:\n\nПример: Neck Massage');
    if (!name || !name.trim()) return;
    
    const icon = prompt('Эмодзи иконка (опционально):', '✨');
    
    // Ask if directional
    const isDirectional = confirm('Нужна ли направленность (активная/пассивная роль)?\n\nЕсли фетиш подразумевает разные роли - нажмите ОК.');
    
    let givingDesc = null;
    let receivingDesc = null;
    
    if (isDirectional) {
        givingDesc = prompt('Активная роль (giving) - КОРОТКАЯ фраза на английском:\n\nПример: massaging partner\'s neck', `giving ${name.trim()}`);
        if (!givingDesc) return;
        
        receivingDesc = prompt('Пассивная роль (receiving) - КОРОТКАЯ фраза на английском:\n\nПример: receiving neck massage', `receiving ${name.trim()}`);
        if (!receivingDesc) return;
    }
    
    const prompt_text = prompt('AI промпт - описание активности на английском:\n\nПример: neck massage\n\n(Только название, система автоматически добавит "enjoys")', name.trim());
    if (!prompt_text || !prompt_text.trim()) return;
    
    const id = `custom_${Date.now()}`;
    
    const customFetish = {
        id: id,
        name: name.trim(),
        icon: icon || '✨',
        prompt: `[FETISH: ${name.trim()}] {{char}} enjoys ${prompt_text.trim()}`,
        isDirectional: isDirectional
    };
    
    // Add directional descriptions if needed
    if (isDirectional) {
        customFetish.givingDesc = givingDesc.trim();
        customFetish.receivingDesc = receivingDesc.trim();
    }
    
    state.custom.push(customFetish);
    
    save();
    renderCustomList();
    notify(`✨ ${name.trim()} добавлен!`);
}

// Delete custom fetish
function deleteCustomFetish(id) {
    const fetish = state.custom.find(f => f.id === id);
    if (!fetish) return;
    
    if (!confirm(`Удалить "${fetish.name}"?`)) return;
    
    state.custom = state.custom.filter(f => f.id !== id);
    state.active = state.active.filter(a => 
        a !== id && a !== `${id}_giving` && a !== `${id}_receiving`
    );
    
    save();
    renderCustomList();
    updateUI();
    apply();
    notify(`${fetish.name} удален`);
}


function clearAll() {
    state.active = [];
    updateUI();
    apply();
    save();
    notify('🧹 Все фетиши очищены');
}

function toggle(key) {
    const f = FETISHES[key] || state.custom.find(c => c.id === key);
    
    // Check if this is a BUILT-IN directional fetish OR custom directional fetish
    const isBuiltInDirectional = DIRECTIONAL_FETISHES[key];
    const isCustomDirectional = f && f.isDirectional && !FETISHES[key];
    
    if (isBuiltInDirectional || isCustomDirectional) {
        // Check if ANY variant of this fetish exists
        const hasGiving = state.active.includes(`${key}_giving`);
        const hasReceiving = state.active.includes(`${key}_receiving`);
        const hasBase = state.active.includes(key);
        
        if (!hasGiving && !hasReceiving && !hasBase) {
            // Adding new - show modal
            showDirectionModal(key, f?.name || key).then(direction => {
                if (!direction) return; // User cancelled
                
                if (direction === 'both') {
                    state.active.push(`${key}_giving`, `${key}_receiving`);
                    notify(`${f?.icon || ''} ${f?.name || key} - Обе роли добавлены`);
                } else {
                    state.active.push(`${key}_${direction}`);
                    const config = DIRECTIONAL_FETISHES[key];
                    notify(`${f?.icon || ''} ${f?.name || key} - ${config[direction]}`);
                }
                
                updateUI();
                apply();
                save();
            });
            return;
        } else {
            // Removing - remove ALL variants
            const toRemove = state.active.filter(k => 
                k === key || k === `${key}_giving` || k === `${key}_receiving`
            );
            
            toRemove.forEach(k => {
                const idx = state.active.indexOf(k);
                if (idx >= 0) state.active.splice(idx, 1);
            });
            
            if (toRemove.length > 0) {
                notify(`${f?.icon || ''} ${f?.name || key} удален(о)`);
            }
            
            updateUI();
            apply();
            save();
            return;
        }
    }
    
    // Non-directional fetishes - original behavior
    const i = state.active.indexOf(key);
    if (i < 0) {
        state.active.push(key);
        notify(`${f?.icon || ''} ${f?.name || key}${f?.desc_ru ? '<br/>' + f.desc_ru : ''}`);
    } else {
        state.active.splice(i, 1);
        notify(`${f?.name || key} удален(о)`);
    }
    
    updateUI();
    apply();
    save();
}


// ============================================
// RANDOM FETISH SELECTION - Added Feature  
// ============================================

/**
 * Fisher-Yates shuffle algorithm for true randomness
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Randomly selects 5 fetishes from the entire list
 */
async function selectRandomFetishes() {
    state.active = []; // Clear all active fetishes first
    const allFetishKeys = Object.keys(FETISHES);
    const countToSelect = Math.min(5, allFetishKeys.length);
    const shuffled = shuffleArray(allFetishKeys);
    const selected = shuffled.slice(0, countToSelect);
    
    let addedCount = 0;
    
    for (const key of selected) {
        // Check if this is a directional fetish
        if (DIRECTIONAL_FETISHES[key]) {
            // Randomly choose direction: 'giving', 'receiving', or 'both'
            const directions = ['giving', 'receiving', 'both'];
            const randomDirection = directions[Math.floor(Math.random() * directions.length)];
            
            if (randomDirection === 'both') {
                state.active.push(`${key}_giving`, `${key}_receiving`);
                addedCount++;
            } else {
                state.active.push(`${key}_${randomDirection}`);
                addedCount++;
            }
        } else {
            // Regular fetish - just add it
            state.active.push(key);
            addedCount++;
        }
    }
    
    save();
    updateUI();
    renderCategories();
    apply();
    notify(`${addedCount} случайных фетишей добавлено!`);
}


/**
 * Handle random button click
 */
async function handleRandomSelection() {
    await selectRandomFetishes();
}

jQuery(async () => {
    load();

    const $panel = $(`
        <div class="fetish-panel hidden" id="fm-panel">
            <div class="fetish-header">
                <h4>Fetish Manager</h4>
                <button class="fetish-minimize-btn">✕</button>
            </div>
            <div class="fetish-controls">
                <label class="fetish-toggle">
                    <input type="checkbox" id="fm-enabled" ${state.enabled ? 'checked' : ''}> Включить систему
                </label>
                
                <div class="fetish-dropdown-container">
                    <label class="fetish-dropdown-label">🔴 Когда применять:</label>
                    <select id="fm-when-apply" class="fetish-dropdown">
                        <option value="nsfw" ${state.whenApply === 'nsfw' ? 'selected' : ''}>🔴 Только NSFW сцены</option>
                        <option value="always" ${state.whenApply === 'always' ? 'selected' : ''}>🟢 Всегда (включая SFW)</option>
                    </select>
                </div>
                <div class="fetish-dropdown-container">
                    <label class="fetish-dropdown-label">💬 Как выражать:</label>
                    <select id="fm-how-express" class="fetish-dropdown">
                        <option value="subtle" ${state.howExpress === 'subtle' ? 'selected' : ''}>🌫️ Тонкие намеки</option>
                        <option value="direct" ${state.howExpress === 'direct' ? 'selected' : ''}>💬 Прямые упоминания</option>
                        <option value="constant" ${state.howExpress === 'constant' ? 'selected' : ''}>🔥 Постоянный фокус</option>
                    </select>
                </div>

                <div class="fetish-search">
                    <input type="text" id="fm-search" placeholder="🔍 Поиск фетишей..." value="${state.searchQuery}">
                </div>
            </div>
            <div class="fetish-active">
                <div class="active-header">
                    <span>✦ АКТИВНЫЕ</span>
                    <button class="fetish-clear-inline-btn" id="fm-clear-all">🧹 Очистить</button>
                    <button class="fetish-random-inline-btn" id="fm-random-5">🎲 5 случайных</button>
                </div>
                <div class="active-list" id="fm-active-display"></div>
                            </div>

            <!-- Custom Fetishes Section -->
            <div class="fetish-custom">
                <div class="custom-header">
                    <span>Кастомные / Custom</span>
                    <button class="fetish-add-custom-btn" id="fm-add-custom">+ Добавить</button>
                </div>
                <div class="custom-list" id="fm-custom-list"></div>
            </div>
            <div class="fetish-categories"></div>
        </div>
    `);

    const $miniBtn = $('<div class="fetish-mini-btn" id="fm-mini-btn">🔥</div>');

    $('body').append($panel).append($miniBtn);

        // Add direction selection modal to body
    const directionModal = $(`
        <div id="fm-direction-modal" class="fm-modal" style="display:none;">
            <div class="fm-modal-overlay"></div>
            <div class="fm-modal-content">
                <h3 class="fm-modal-title">Укажите направление / Specify Direction</h3>
                <p class="fm-modal-subtitle" id="fm-modal-fetish-name"></p>
                <div class="fm-modal-buttons">
                    <button class="fm-modal-btn fm-modal-giving">
                        <span class="fm-modal-icon">👉</span>
                        <span class="fm-modal-text">Активная роль / Active Role</span>
                        <span class="fm-modal-desc" id="fm-modal-giving-desc"></span>
                    </button>
                    <button class="fm-modal-btn fm-modal-receiving">
                        <span class="fm-modal-icon">👈</span>
                        <span class="fm-modal-text">Пассивная роль / Passive Role</span>
                        <span class="fm-modal-desc" id="fm-modal-receiving-desc"></span>
                    </button>
                    <button class="fm-modal-btn fm-modal-both">
                        <span class="fm-modal-icon">🔄</span>
                        <span class="fm-modal-text">Обе роли / Both Roles</span>
                    </button>
                </div>
                <button class="fm-modal-cancel">Отмена / Cancel</button>
            </div>
        </div>
    `);
    $('body').append(directionModal);


    // Modal button handlers
    $('#fm-direction-modal .fm-modal-giving').on('click', function() {
        $('#fm-direction-modal').fadeOut(200);
        if (currentModalResolve) {
            currentModalResolve('giving');
            currentModalResolve = null;
        }
    });

    $('#fm-direction-modal .fm-modal-receiving').on('click', function() {
        $('#fm-direction-modal').fadeOut(200);
        if (currentModalResolve) {
            currentModalResolve('receiving');
            currentModalResolve = null;
        }
    });

    $('#fm-direction-modal .fm-modal-both').on('click', function() {
        $('#fm-direction-modal').fadeOut(200);
        if (currentModalResolve) {
            currentModalResolve('both');
            currentModalResolve = null;
        }
    });

    $('#fm-direction-modal .fm-modal-cancel, #fm-direction-modal .fm-modal-overlay').on('click', function() {
        $('#fm-direction-modal').fadeOut(200);
        if (currentModalResolve) {
            currentModalResolve(null);
            currentModalResolve = null;
        }
    });

    // Make elements draggable
    makeDraggable($miniBtn, $miniBtn);
    makeDraggable($panel, $('.fetish-header'));

    $miniBtn.on('click', () => {
        $panel.removeClass('hidden');
        $miniBtn.hide();
    });

    $('.fetish-minimize-btn').on('click', () => {
        $panel.addClass('hidden');
        $miniBtn.show();
    });

    $('#fm-enabled').on('change', function() {
        state.enabled = $(this).is(':checked');
        apply();
        save();
    });

    $('#fm-search').on('input', handleSearch);

    $('#fm-clear-all').on('click', clearAll);
        // Custom fetish handlers
    $('#fm-add-custom').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        addCustomFetish();
    });

    $(document).on('click', '.custom-fetish-item .custom-fetish-name, .custom-fetish-item .custom-fetish-icon', function(e) {
        e.preventDefault();
        const id = $(this).closest('.custom-fetish-item').data('id');
        toggle(id);
    });

    $(document).on('click', '.custom-fetish-delete', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const id = $(this).data('id');
        deleteCustomFetish(id);
    });

    $('#fm-random-5').on('click', handleRandomSelection);

    // Event delegation for removing individual fetishes via X button
    $(document).on('click', '.fetish-tag-remove', function(e) {
        e.stopPropagation();
        const tag = $(this).closest('.active-fetish-tag');
        const key = tag.data('key');
        if (key) {
            toggle(key);
        }
    });

    renderCategories();
    updateUI();
    apply();
});
