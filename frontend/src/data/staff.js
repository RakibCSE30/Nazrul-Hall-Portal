// Sample staff data. Replace/extend from backend later.
const STAFF = [
  // Hall staff
  {
    id: 'hs-1',
    group: 'hall-staff',
    subgroup: 'administration',
    name: 'Md. Saiful Islam',
    designation: 'Assistant Provost',
    phone: '01710000101',
    blood: 'O+',
    photo: 'https://i.pravatar.cc/400?img=41',
    info: 'Handles daily administration and student welfare.'
  },
  {
    id: 'hs-2',
    group: 'hall-staff',
    subgroup: 'caretakers',
    name: 'Ayesha Begum',
    designation: 'Hall Office Secretary',
    phone: '01710000102',
    blood: 'A+',
    photo: 'https://i.pravatar.cc/400?img=42',
    info: 'Office coordinator and noticeboard manager.'
  },

  // Dining staff
  {
    id: 'ds-1',
    group: 'dining-staff',
    subgroup: 'kitchen',
    name: 'Rafiq Ahmed',
    designation: 'Head Cook',
    phone: '01710000201',
    blood: 'B+',
    photo: 'https://i.pravatar.cc/400?img=43',
    info: 'Manages menu and kitchen staff.'
  },
  {
    id: 'ds-2',
    group: 'dining-staff',
    subgroup: 'service',
    name: 'Sultana Khatun',
    designation: 'Dining Supervisor',
    phone: '01710000202',
    blood: 'AB+',
    photo: 'https://i.pravatar.cc/400?img=44',
    info: 'Oversees serving and token collection area.'
  },

  // Canteen staff
  {
    id: 'cs-1',
    group: 'canteen-staff',
    subgroup: 'canteen',
    name: 'Mamun Mia',
    designation: 'Canteen Manager',
    phone: '01710000301',
    blood: 'O-',
    photo: 'https://i.pravatar.cc/400?img=45',
    info: 'Runs the canteen, menu & supplier coordination.'
  },

  // Dokan (shops) staff - types: stationary, grocery, tea-biscuit
  {
    id: 'dk-st-1',
    group: 'dokan-staff',
    subgroup: 'stationary',
    type: 'Stationary',
    name: 'Stationary Shop - Owner',
    designation: 'Shop Owner',
    phone: '01710000401',
    blood: 'A-',
    photo: 'https://i.pravatar.cc/400?img=46',
    info: 'Stationary items: pens, notebooks, exam supplies.'
  },
  {
    id: 'dk-gr-1',
    group: 'dokan-staff',
    subgroup: 'grocery',
    type: 'Grocery',
    name: 'Grocery Stall',
    designation: 'Shop Keeper',
    phone: '01710000402',
    blood: 'B-',
    photo: 'https://i.pravatar.cc/400?img=47',
    info: 'Daily grocery and snacks.'
  },
  {
    id: 'dk-tb-1',
    group: 'dokan-staff',
    subgroup: 'tea-biscuit',
    type: 'Tea & Biscuits',
    name: 'Tea Shop',
    designation: 'Vendor',
    phone: '01710000403',
    blood: 'AB-',
    photo: 'https://i.pravatar.cc/400?img=48',
    info: 'Tea, biscuits, light snacks and beverages.'
  }
];

export default STAFF;