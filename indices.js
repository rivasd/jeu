/*
                      :PB@Bk:
                  ,jB@@B@B@B@BBL.
               7G@B@B@BMMMMMB@B@B@Nr
           :kB@B@@@MMOMOMOMOMMMM@B@B@B1,
       :5@B@B@B@BBMMOMOMOMOMOMOMM@@@B@B@BBu.
    70@@@B@B@B@BXBBOMOMOMOMOMOMMBMPB@B@B@B@B@Nr
  G@@@BJ iB@B@@  OBMOMOMOMOMOMOM@2  B@B@B. EB@B@S
  @@BM@GJBU.  iSuB@OMOMOMOMOMOMM@OU1:  .kBLM@M@B@
  B@MMB@B       7@BBMMOMOMOMOMOBB@:       B@BMM@B
  @@@B@B         7@@@MMOMOMOMM@B@:         @@B@B@
  @@OLB.          BNB@MMOMOMM@BEB          rBjM@B
  @@  @           M  OBOMOMM@q  M          .@  @@
  @@OvB           B:u@MMOMOMMBJiB          .BvM@B
  @B@B@J         0@B@MMOMOMOMB@B@u         q@@@B@
  B@MBB@v       G@@BMMMMMMMMMMMBB@5       F@BMM@B
  @BBM@BPNi   LMEB@OMMMM@B@MMOMM@BZM7   rEqB@MBB@
  B@@@BM  B@B@B  qBMOMB@B@B@BMOMBL  B@B@B  @B@B@M
   J@@@@PB@B@B@B7G@OMBB.   ,@MMM@qLB@B@@@BqB@BBv
      iGB@,i0@M@B@MMO@E  :  M@OMM@@@B@Pii@@N:
         .   B@M@B@MMM@B@B@B@MMM@@@M@B
             @B@B.i@MBB@B@B@@BM@::B@B@
             B@@@ .B@B.:@B@ :B@B  @B@O
               :0 r@B@  B@@ .@B@: P:
                   vMB :@B@ :BO7
                       ,B@B
                tout peut être hacké
                        et tout le monde!
*/


require.config({
    baseUrl: "./src/"
});

animateurs = [
    'noemie',
    'laurence',
    'antoine',
    'emmanuelle_richer',
    'genevieve',
    'catherine',
    'louis_serey',
    'rosalie',
    'remi fa',
    'remichou',
    'guillaume',
    'vincent',
    'dom',
    'sandrine_jaumard',
    'js',
    'gaby',
    'daniel',
    'mathias',
    'stan',
    'nunue',
    'denzel',
    'sandrine_afonso',
    'franck',
    'gee',
    'sandwich',
    'matteo',
    'tom',
    'boxo',
    'noe',
    'xavier',
    'emmanuelle_douyon',
    'nora',
    'flavie',
    'camille',
    'melissa',
    'phil',
    'paul',
    'justine',
    'jean_michel'
]

reponses_possibles = [72, 12, 48, 100, 7, 256, 44, 32, 27, 3, 125, 49, 55, 9, 60, 10, 4, 50, 15,
    20, 8, 30, 144, 75, 2, 21, 25, 1024, 512, 11, 225, 64, 18, 6, 16, 24, 500, 36, 33, 625, 5]

require(['csp', 'Hash', 'Set'],
    function(csp, Hash, Set){
        window.Hash = Hash;
        window.Set = Set;

        jeu = csp.DiscreteProblem();

        //ajouter chaque anim comme variable avec le domaine des reponses possibles
        animateurs.forEach(function(anim){
            jeu.addVariable(anim, reponses_possibles);
        });

        //contrainte que chaque animateur a un numero different
        jeu.addConstraint(
            animateurs,
            function(args){
                var anims = Array.from(arguments);
                return anims.some(function(anim, idx){
                    return anims.indexOf(anim) != idx;
                });
            }
        );

        /*
        * Rentrer les indices dont vous disposez de la facon suivante:
        * 
        *   «le chiffre de matteo est egal a celui de boxo divise par celui de noe»
        * 
        * jeu.addConstraint(["matteo", "boxo", "now"], function(matteo, boxo, noe){ return matteo == boxo / noe });
        * 
        *   «Le chiffre de Franck, c'est clairement 18»
        * 
        * jeu.addConstraint(["franck"], function(franck){ return franck == 18});
        * 
        * Le noms des anims doivent être écrits exactement comme dans la liste des animateurs plus haut
        * 
        * Pour tester la deduction en enlevant temporairement un indice douteux, rajouter deux barres obliques devant comme suit
        * 
        * //jeu.addConstraint( etc...);
        * 
        * Bonne chasse!
        * 
        */

        // jeu.addConstraint(['franck'], function(franck){ franck != 512}); // franck nous a-t-il tous trolle solide?



        document.getElementById('go').addEventListener('click', function(evt){
            document.getElementById('results').innerHTML="";
            document.getElementById('results').innerHTML= jeu.getSolutions();
        })
    }
)