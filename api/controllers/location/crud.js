module.exports = {
    friendlyName: 'View Maps page',
    description: 'Display the dashboard "Maps" page.',
    exits: {
        success: {
            viewTemplatePath: 'crud-locations/add',
            description: 'Display the maps page for authenticated users.'
        },
    },
    fn: async function (inputs, exits) {
       console.log('create');
        return exits.success();
    }
};