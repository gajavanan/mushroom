// Mushroom dataset features schema and option mappings

export const FEATURE_CATEGORIES = [
  {
    id: 'cap',
    name: 'CAP CHARACTERISTICS',
    description: 'Physical traits of the mushroom cap top surface, color, and shape',
    icon: 'Sparkles',
    features: ['cap-shape', 'cap-surface', 'cap-color', 'bruises', 'odor']
  },
  {
    id: 'gill',
    name: 'GILL CHARACTERISTICS',
    description: 'Under-cap spore-producing structures',
    icon: 'Layers',
    features: ['gill-attachment', 'gill-spacing', 'gill-size', 'gill-color']
  },
  {
    id: 'stalk',
    name: 'STALK CHARACTERISTICS',
    description: 'Stem structure, surface textures, and coloration above/below ring',
    icon: 'Activity',
    features: [
      'stalk-shape',
      'stalk-root',
      'stalk-surface-above-ring',
      'stalk-surface-below-ring',
      'stalk-color-above-ring',
      'stalk-color-below-ring'
    ]
  },
  {
    id: 'veil-ring',
    name: 'VEIL & RING',
    description: 'Membrane structures protecting the developing gills',
    icon: 'CircleDot',
    features: ['veil-type', 'veil-color', 'ring-number', 'ring-type']
  },
  {
    id: 'other',
    name: 'OTHER CHARACTERISTICS',
    description: 'Spore print, population density, and natural habitat',
    icon: 'Compass',
    features: ['spore-print-color', 'population', 'habitat']
  }
];

export const MUSHROOM_FEATURES = {
  'cap-shape': {
    label: '1. Cap Shape',
    options: [
      { value: 'b', label: 'Bell (b)' },
      { value: 'c', label: 'Conical (c)' },
      { value: 'x', label: 'Convex (x)' },
      { value: 'f', label: 'Flat (f)' },
      { value: 'k', label: 'Knobbed (k)' },
      { value: 's', label: 'Sunken (s)' }
    ],
    default: 'x'
  },
  'cap-surface': {
    label: '2. Cap Surface',
    options: [
      { value: 'f', label: 'Fibrous (f)' },
      { value: 'g', label: 'Grooves (g)' },
      { value: 'y', label: 'Scaly (y)' },
      { value: 's', label: 'Smooth (s)' }
    ],
    default: 's'
  },
  'cap-color': {
    label: '3. Cap Color',
    options: [
      { value: 'n', label: 'Brown (n)' },
      { value: 'b', label: 'Buff (b)' },
      { value: 'c', label: 'Cinnamon (c)' },
      { value: 'g', label: 'Gray (g)' },
      { value: 'r', label: 'Green (r)' },
      { value: 'p', label: 'Pink (p)' },
      { value: 'u', label: 'Purple (u)' },
      { value: 'e', label: 'Red (e)' },
      { value: 'w', label: 'White (w)' },
      { value: 'y', label: 'Yellow (y)' }
    ],
    default: 'n'
  },
  'bruises': {
    label: '4. Bruises',
    options: [
      { value: 't', label: 'Bruises Present (t)' },
      { value: 'f', label: 'No Bruises (f)' }
    ],
    default: 't'
  },
  'odor': {
    label: '5. Odor',
    options: [
      { value: 'a', label: 'Almond (a)' },
      { value: 'l', label: 'Anise (l)' },
      { value: 'c', label: 'Creosote (c)' },
      { value: 'y', label: 'Fishy (y)' },
      { value: 'f', label: 'Foul (f)' },
      { value: 'm', label: 'Musty (m)' },
      { value: 'n', label: 'None (n)' },
      { value: 'p', label: 'Pungent (p)' },
      { value: 's', label: 'Spicy (s)' }
    ],
    default: 'n'
  },
  'gill-attachment': {
    label: '6. Gill Attachment',
    options: [
      { value: 'a', label: 'Attached (a)' },
      { value: 'd', label: 'Descending (d)' },
      { value: 'f', label: 'Free (f)' },
      { value: 'n', label: 'Notched (n)' }
    ],
    default: 'f'
  },
  'gill-spacing': {
    label: '7. Gill Spacing',
    options: [
      { value: 'c', label: 'Close (c)' },
      { value: 'w', label: 'Crowded (w)' },
      { value: 'd', label: 'Distant (d)' }
    ],
    default: 'c'
  },
  'gill-size': {
    label: '8. Gill Size',
    options: [
      { value: 'b', label: 'Broad (b)' },
      { value: 'n', label: 'Narrow (n)' }
    ],
    default: 'b'
  },
  'gill-color': {
    label: '9. Gill Color',
    options: [
      { value: 'k', label: 'Black (k)' },
      { value: 'n', label: 'Brown (n)' },
      { value: 'b', label: 'Buff (b)' },
      { value: 'h', label: 'Chocolate (h)' },
      { value: 'g', label: 'Gray (g)' },
      { value: 'r', label: 'Green (r)' },
      { value: 'o', label: 'Orange (o)' },
      { value: 'p', label: 'Pink (p)' },
      { value: 'u', label: 'Purple (u)' },
      { value: 'e', label: 'Red (e)' },
      { value: 'w', label: 'White (w)' },
      { value: 'y', label: 'Yellow (y)' }
    ],
    default: 'k'
  },
  'stalk-shape': {
    label: '10. Stalk Shape',
    options: [
      { value: 'e', label: 'Enlarging (e)' },
      { value: 't', label: 'Tapering (t)' }
    ],
    default: 'e'
  },
  'stalk-root': {
    label: '11. Stalk Root',
    options: [
      { value: 'b', label: 'Bulbous (b)' },
      { value: 'c', label: 'Club (c)' },
      { value: 'e', label: 'Equal (e)' },
      { value: 'r', label: 'Rooted (r)' },
      { value: '?', label: 'Missing (?)' }
    ],
    default: 'b'
  },
  'stalk-surface-above-ring': {
    label: '12. Stalk Surface Above Ring',
    options: [
      { value: 'f', label: 'Fibrous (f)' },
      { value: 'y', label: 'Scaly (y)' },
      { value: 'k', label: 'Silky (k)' },
      { value: 's', label: 'Smooth (s)' }
    ],
    default: 's'
  },
  'stalk-surface-below-ring': {
    label: '13. Stalk Surface Below Ring',
    options: [
      { value: 'f', label: 'Fibrous (f)' },
      { value: 'y', label: 'Scaly (y)' },
      { value: 'k', label: 'Silky (k)' },
      { value: 's', label: 'Smooth (s)' }
    ],
    default: 's'
  },
  'stalk-color-above-ring': {
    label: '14. Stalk Color Above Ring',
    options: [
      { value: 'n', label: 'Brown (n)' },
      { value: 'b', label: 'Buff (b)' },
      { value: 'c', label: 'Cinnamon (c)' },
      { value: 'g', label: 'Gray (g)' },
      { value: 'o', label: 'Orange (o)' },
      { value: 'p', label: 'Pink (p)' },
      { value: 'e', label: 'Red (e)' },
      { value: 'w', label: 'White (w)' },
      { value: 'y', label: 'Yellow (y)' }
    ],
    default: 'w'
  },
  'stalk-color-below-ring': {
    label: '15. Stalk Color Below Ring',
    options: [
      { value: 'n', label: 'Brown (n)' },
      { value: 'b', label: 'Buff (b)' },
      { value: 'c', label: 'Cinnamon (c)' },
      { value: 'g', label: 'Gray (g)' },
      { value: 'o', label: 'Orange (o)' },
      { value: 'p', label: 'Pink (p)' },
      { value: 'e', label: 'Red (e)' },
      { value: 'w', label: 'White (w)' },
      { value: 'y', label: 'Yellow (y)' }
    ],
    default: 'w'
  },
  'veil-type': {
    label: '16. Veil Type',
    options: [
      { value: 'p', label: 'Partial (p)' },
      { value: 'u', label: 'Universal (u)' }
    ],
    default: 'p'
  },
  'veil-color': {
    label: '17. Veil Color',
    options: [
      { value: 'n', label: 'Brown (n)' },
      { value: 'o', label: 'Orange (o)' },
      { value: 'w', label: 'White (w)' },
      { value: 'y', label: 'Yellow (y)' }
    ],
    default: 'w'
  },
  'ring-number': {
    label: '18. Ring Number',
    options: [
      { value: 'n', label: 'None (n)' },
      { value: 'o', label: 'One (o)' },
      { value: 't', label: 'Two (t)' }
    ],
    default: 'o'
  },
  'ring-type': {
    label: '19. Ring Type',
    options: [
      { value: 'c', label: 'Cobwebby (c)' },
      { value: 'e', label: 'Evanescent (e)' },
      { value: 'f', label: 'Flaring (f)' },
      { value: 'l', label: 'Large (l)' },
      { value: 'n', label: 'None (n)' },
      { value: 'p', label: 'Pendant (p)' },
      { value: 's', label: 'Sheathing (s)' },
      { value: 'z', label: 'Zone (z)' }
    ],
    default: 'p'
  },
  'spore-print-color': {
    label: '20. Spore Print Color',
    options: [
      { value: 'k', label: 'Black (k)' },
      { value: 'n', label: 'Brown (n)' },
      { value: 'b', label: 'Buff (b)' },
      { value: 'h', label: 'Chocolate (h)' },
      { value: 'r', label: 'Green (r)' },
      { value: 'o', label: 'Orange (o)' },
      { value: 'u', label: 'Purple (u)' },
      { value: 'w', label: 'White (w)' },
      { value: 'y', label: 'Yellow (y)' }
    ],
    default: 'k'
  },
  'population': {
    label: '21. Population',
    options: [
      { value: 'a', label: 'Abundant (a)' },
      { value: 'c', label: 'Clustered (c)' },
      { value: 'n', label: 'Numerous (n)' },
      { value: 's', label: 'Scattered (s)' },
      { value: 'v', label: 'Several (v)' },
      { value: 'y', label: 'Solitary (y)' }
    ],
    default: 's'
  },
  'habitat': {
    label: '22. Habitat',
    options: [
      { value: 'g', label: 'Grasses (g)' },
      { value: 'l', label: 'Leaves (l)' },
      { value: 'm', label: 'Meadows (m)' },
      { value: 'p', label: 'Paths (p)' },
      { value: 'u', label: 'Urban (u)' },
      { value: 'w', label: 'Waste (w)' },
      { value: 'd', label: 'Woods (d)' }
    ],
    default: 'g'
  }
};

// Preset samples for fast user testing
export const PRESET_EDIBLE_SAMPLE = {
  'cap-shape': 'x',
  'cap-surface': 's',
  'cap-color': 'n',
  'bruises': 't',
  'odor': 'a', // almond (strong edible indicator)
  'gill-attachment': 'f',
  'gill-spacing': 'c',
  'gill-size': 'b',
  'gill-color': 'k',
  'stalk-shape': 'e',
  'stalk-root': 'b',
  'stalk-surface-above-ring': 's',
  'stalk-surface-below-ring': 's',
  'stalk-color-above-ring': 'w',
  'stalk-color-below-ring': 'w',
  'veil-type': 'p',
  'veil-color': 'w',
  'ring-number': 'o',
  'ring-type': 'p',
  'spore-print-color': 'n',
  'population': 's',
  'habitat': 'g'
};

export const PRESET_POISONOUS_SAMPLE = {
  'cap-shape': 'f',
  'cap-surface': 'y',
  'cap-color': 'e', // red cap
  'bruises': 'f',
  'odor': 'f', // foul odor (strong poisonous indicator)
  'gill-attachment': 'f',
  'gill-spacing': 'c',
  'gill-size': 'n',
  'gill-color': 'b',
  'stalk-shape': 'e',
  'stalk-root': 'b',
  'stalk-surface-above-ring': 'k', // silky
  'stalk-surface-below-ring': 'k',
  'stalk-color-above-ring': 'w',
  'stalk-color-below-ring': 'w',
  'veil-type': 'p',
  'veil-color': 'w',
  'ring-number': 'o',
  'ring-type': 'e',
  'spore-print-color': 'w',
  'population': 'v',
  'habitat': 'd'
};
