describe('ViewModel Tests', function (){

    beforeEach(module('myApp.common'));

    var ViewModel, $log, $location;
    var KNOWN_TASKABLE_VIEWS = [
        "brand-view", "brand-update",
        "extras/extra-manage", "ratings/rating-manage", "filterfails/filterfail-manage", "offers/offer-manage",
        "provider-view", "provider-update", "translation/translation-manage", "extendedconfig/extendedconfig-manage",
        "tsmEntity-view","tsmEntity-update"
    ];

    beforeEach(inject(function ($injector){
        $log = $injector.get('$log');
        $location = $injector.get('$location');
        ViewModel = $injector.get('ViewModel');
    }));

    it("Should change partial", function (){
        ViewModel.changePartial('abcdefg');
        expect(ViewModel.currentView).toEqual("abcdefg");
    });

    it("Should have same number fo test views as real views", function (){
        expect(ViewModel.TASKABLE_VIEWS.length).toBe(KNOWN_TASKABLE_VIEWS.length);
    });

    it("Should reset location hash on change partial", function (){
        $location.hash("test-hash");
        expect($location.$$hash).toBe("test-hash");

        ViewModel.changePartial('abcdefg');
        expect($location.$$hash).toBe("");
    });

    it("Should know what is a taskable view", function (){
        KNOWN_TASKABLE_VIEWS.forEach(function (view){
            ViewModel.changePartial(view);
            expect(ViewModel.isTaskableView()).toBe(true);
        });
        [null, undefined, "12345abcdef"].forEach(function (view){
            ViewModel.changePartial(view);
            expect(ViewModel.isTaskableView()).toBe(false);
        });
    });

    it("Should navigate to sub view or reset", function (){
        ViewModel.currentView = "curView";
        ViewModel.sub_view = "";
        expect(ViewModel.currentView).toBe("curView");
        expect(ViewModel.sub_view).toBe("");

        ViewModel.changeSubViewPartial("subview-partial");
        expect(ViewModel.currentView).toBe("curView");
        expect(ViewModel.sub_view).toBe("subview-partial");

        ViewModel.navigateToSubViewOrReset("entity-view");
        expect(ViewModel.currentView).toBe("subview-partial");
        expect(ViewModel.sub_view).toBe("");
    });

});
