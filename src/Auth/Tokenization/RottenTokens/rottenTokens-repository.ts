import mongoDbAdapter from '../../../_common/services/mongoDb/mongoDb-adapter';
import { AdapterType } from '../../../_common/services/mongoDb/types';
import Repository from '../../../_common/abstractions/Repository/Repository';

/**Хранение невалидных токенов */
class RottenTokensRepository extends Repository {
    constructor(collectionName: string, dataService: AdapterType) { super(collectionName, dataService) }
}


export default new RottenTokensRepository('canceledTokens', mongoDbAdapter)