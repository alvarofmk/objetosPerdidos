export interface LostItem{

    description: String;
    categoryId: number;
    location: google.maps.LatLngLiteral;

}

export const itemConverter = {
    toFirestore: (item: LostItem) => {
        return {
            description: item.description,
            categoryId: item.categoryId,
            location: item.location
            };
    },
    fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
        const data = snapshot.data(options);
        let item: LostItem = {} as LostItem;
        item.categoryId = data.categoryId;
        item.location = data.location;
        item.description = data.description;
        return item;
    }
};