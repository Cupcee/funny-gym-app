let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
        height: 185,
        weight: 80,
    },
    2: {
        id: '2',
        username: 'Dave Davids',
        height: 190,
        weight: 90,
    },
    3: {
        id: '3',
        username: 'Samuel Piirainen',
        height: 182,
        weight: 74,
    },
};

let gymsets = {
    1: [],
    2: [{
        weekday: 'MON',
        exercises: {
            bench: [120, 'kg'],
            squat: [160, 'kg'],
            overhead_press: [70, 'kg']
        }
    }],
    3: [{
        weekday: 'TUE',
        exercises: {
            bench: {
                weight: 80, reps: 5, sets: 5, unit: 'kg'
            },
            overhead_press: {
                weight: 50, reps: 5, sets: 5, unit: 'kg'
            }
        }
    },
    {
        weekday: 'WED',
        exercises: {
            squat: {
                weight: 80, reps: 5, sets: 5, unit: 'kg'
            },
            overhead_press: {
                weight: 50, reps: 5, sets: 5, unit: 'kg'
            }
        }
    },
    {
        weekday: 'THU',
        exercises: {
            squat: {
                weight: 80, reps: 5, sets: 5, unit: 'kg'
            },
            overhead_press: {
                weight: 50, reps: 5, sets: 5, unit: 'kg'
            }
        }
    },
    {
        weekday: 'FRI',
        exercises: {
            squat: {
                weight: 80, reps: 5, sets: 5, unit: 'kg'
            },
            overhead_press: {
                weight: 50, reps: 5, sets: 5, unit: 'kg'
            }
        }
    },
    {
        weekday: 'SAT',
        exercises: {
            squat: {
                weight: 80, reps: 5, sets: 5, unit: 'kg'
            },
            overhead_press: {
                weight: 50, reps: 5, sets: 5, unit: 'kg'
            }
        }
    },
    {
        weekday: 'SUN',
        exercises: {
            squat: {
                weight: 80, reps: 5, sets: 5, unit: 'kg'
            },
            overhead_press: {
                weight: 50, reps: 5, sets: 5, unit: 'kg'
            }
        }
    }],
}

export default {
    users,
    gymsets
}