data_action = [
    {
        title: "Attack",
        icon: "spinning-sword",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a melee weapon you can engage in <i>Two-Weapon Fighting</i>.",
            "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Two-Weapon Fighting",
        icon: "crossed-swords",
        subtitle: "Make an offhand attack",
        description: "Perform an offhand attack with your weapon",
        reference: "WCX, pg. 87.",
        bullets: [
            "When you attack with a melee weapon or make a special melee attack using one hand, you can make an additional attack with a light melee weapon you're holding in the other.",
            "You don't add your ability modifier to the damage of this attack unless it is negative.",
            "You cannot use this and <i>Versatile Fighting</i> on the same turn."
        ]
    },
    {
        title: "Versatile Fighting",
        icon: "winged-sword",
        subtitle: "Make a versatile weapon attack",
        description: "Perform an attack with a versatile weapon",
        reference: "WCX, pg. 87.",
        bullets: [
            "When you make a special melee attack using one hand, you can make an additional attack with a versatile melee weapon you're holding in the other.",
            "You make this attack with one hand on the weapon, even if you have a free hand.",
            "You cannot use this and <i>Two-Weapon Fighting</i> on the same turn."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 195, WCX, pg. 87.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "When you make a special melee attack using one hand, you can engage in <i>Versatile Fighting</i>.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition.",
            "When you move, you can drag or carry the grappled creature with you, but your speed is halved, unless the creature is two or more sizes smaller than you.",
            "You can use the <i>Shove</i> action to move a creature that you have grappled to another space within your reach without breaking the grapple."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "When you make a special melee attack using one hand, you can engage in <i>Versatile Fighting</i>.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you.",
            "Alternatively you can push the target to the side but you must make the Strength (Athletics) check at disadvantage.",
            "If you win the contest, you move the target to a different space within your reach."
        ]
    },
    {
        title: "Toss",
        icon: "impact-point",
        subtitle: "Toss a creature",
        description: "Attempt to toss a creature you're grappling",
        reference: "WCX, pg. 87.",
        bullets: [
            "While you are grappling a creature you can use the <i>Attack</i> action to make a special melee attack to hurl the grappled creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "When you make a special melee attack using one hand, you can engage in <i>Versatile Fighting</i>.",
            "To toss a creature, you must make a Strength (Athletics) check against a DC determined by your size and the target creature's size.",
            "To toss a tiny creature is a DC of 5, small is a DC of 11, medium is a DC of 17, large is a DC of 23, huge is a DC of 29, gargantuan is a DC of 35.",
            "The DC increases by 5 if you're small and 10 if you're tiny, and the DC decreases by 5 if you're large, 10 if you're huge, and 15 if you're gargantuan.",
            "If you succeed, you throw the creature a distance yp to 5 times your Strength modifier + 5 in feet.",
            "When it lands, the thrown creature takes bldugeoning damage for every 10 feet it traveled while thrown, as if it had taken falling damage from a height of the full distance.",
            "The tossed creature lands prone unless it succeeds on a Dexterity (Acrobatics) check with a DC equal to the Strength (Athletics) check used to toss or uses a feature or spell to land safely."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on its next attack roll.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.",
            "If you are searching a creature, the DM might have you roll an Intelligence (Intel) check or another appropriate skill.",
            "Successfully using search on a creature allows you to figure out it's features or stats."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Climb onto a Bigger Creature",
        icon: "gecko",
        subtitle: "Climb a larger creature",
        description: "Latch onto a larger creature",
        reference: "DMG, pg. 271.",
        bullets: [
            "Make a Strength (Athletics) or Dexterity (Acrobatics) contested by the target's Dexterity (Acrobatics) check.",
            "If you win the contest, you successfully move into the target creature's space.",
            "You move with the target and have advantage on attack rolls against it.",
            "You can move around within the creature's space, treating the space as difficult terrain."
        ]
    },
    {
        title: "Dislodge",
        icon: "falling",
        subtitle: "Dislodge a smaller creature",
        description: "Stop a smaller creature from climbing on you",
        reference: "DMG, pg. 271.",
        bullets: [
            "Make a Strength (Athletics) contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check.",
            "If you win the contest, the creature is forced to stop climbing you."
        ]
    },
    {
        title: "Disarm",
        icon: "sword-break",
        subtitle: "Disarm a creature",
        description: "Force a creature to drop a weapon or item",
        reference: "DMG, pg. 271.",
        bullets: [
            "Make an attack roll contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check.",
            "If you win the contest, the target takes no damage but drops the chosen item.",
            "You make the attack with disadvantage if the item is being held in two hands.",
            "The target has advantage on the ability check if it is larger than you and disadvantage if it is smaller than you."
        ]
    },
    {
        title: "Mark",
        icon: "dead-eye",
        subtitle: "Mark a creature",
        description: "Mark a creature as part of a melee attack",
        reference: "DMG, pg. 271.",
        bullets: [
            "When you make a melee attack against a creature, you can also mark the target creature.",
            "Until the end of your next turn the target is marked."
        ]
    },
    {
        title: "Overrun",
        icon: "minotaur",
        subtitle: "Move through a hostile creature",
        description: "Attempt to move through a hostile creature's space",
        reference: "DMG, pg. 271.",
        bullets: [
            "Make a Strength (Athletics) contested by the target's Strength (Athletics) check.",
            "You have advantage on this check if you are larger than the target and disadvantage if you are smaller.",
            "If you win the contest, you can move through the target's space once this turn."
        ]
    },
    {
        title: "Tumble",
        icon: "run",
        subtitle: "Move through a hostile creature",
        description: "Attempt to move through a hostile creature's space",
        reference: "DMG, pg. 271.",
        bullets: [
            "Make a Dexterity (Acrobatics) contested by the target's Dexterity (Acrobatics) check.",
            "If you win the contest, you can move through the target's space once this turn."
        ]
    },
    {
        title: "Reload",
        icon: "ammo-box",
        subtitle: "Reload a weapon",
        description: "Reload a weapon with the reload property",
        reference: "PEO, pg. 1.",
        bullets: [
            "You reload a weapon you're holding with the reload property."
        ]
    },
    {
        title: "Repair",
        icon: "auto-repair",
        subtitle: "Repair a misfired weapon",
        description: "Repair a weapon which has misfired",
        reference: "PEO, pg. 1.",
        bullets: [
            "Make a Tinker's Tools check against a DC of 8 + the weapon's misfire score.",
            "If you succeeded on the ability check then the weapon can be used again.",
            "If you fail on the ability check then the weapon breaks and must be mended out of combat."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
]
