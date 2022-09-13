/**
 * Module dependencies
 */

 import webpack from 'webpack';

 /**
  * Webpack hook
  *
  * @description :: A hook to compile assets using Webhook.
  */
 
 export default function (sails) {
   return {
 
     /**
      * Runs when a Sails app loads/lifts.
      *
      * @param {Function} done
      */
     async initialize(done) {
       // In production mode continue lifting Sails.
       if (process.env.NODE_ENV === 'production') {
         return done();
       }
 
       // Otherwise, create a compiler build the UI Assets and watch the files.
       sails.log.info('Webpack: Compiling Assets');
       const compiler = webpack(sails.config.webpack);
 
       // Trigger the first compile, start watching files, and return
       // an instance we can use to stop the watcher when Sails lowers.
       const watcher = compiler.watch({
         // Wait a bit after a change is detected before recompiling,
         // in case other changes come in.
         aggregateTimeout: 300,
         // Ignore changes to files in node_modules, even if they're
         // imported by our scripts.
         ignored: /node_modules/,
         // poll: true
         // ^^^^^ If native watching isn't working, uncomment the above.
       }, (err, stats) => {
         // If the compilation generates errors and we're not already logging all the output from
         // the watcher, log the errors to the console.
         if (err || stats.hasErrors()) {
           sails.log.error('Webpack encountered errors while compiling.  Full output:');
           sails.log.error(stats.toString({colors: true}));
         }
 
         // Otherwise output the result of the compilation.
         else {
           sails.log.info('Webpack compiled files and outputted:');
           sails.log.info(stats.toString({colors: true}));
         }
       });
 
       // When Sails lowers, stop watching files.
       sails.on('lower', () => {
         watcher && watcher.close();
       });
 
       // Continue lifting Sails.
       return done();
     },
   };
 };
 